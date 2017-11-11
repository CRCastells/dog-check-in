const express = require('express'),
  app = express(),
  request = require('request');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS setup to allow other ports from this host

//Only needed if not on Heroku/prod
if (!process.env.DYNO) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });
}

app.get('/api/grabParks', (req, res) => {
  let apiCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog%20parks&location=${req.query.latitude},${req.query.longitude}&radius=50&key=${process.env.API_KEY}`;
  request(apiCall, (err, response, body) => {
    console.log(err,response,body);
    res.send(body);
  });
});


app.get('/*', (req, res) => {
  res.send('hello!');
});



app.listen(process.env.PORT, () => {
	console.log('Server started on port ' + process.env.PORT);
});