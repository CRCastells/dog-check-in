const express = require('express'),
  app = express(),
  request = require('request'),
  https = require('https'),
  fs = require('fs');

let options = {
  key: fs.readFileSync( './dogcheckin.herokuapp.key' ),
  cert: fs.readFileSync( './dogcheckin.herokuapp.cert' ),
  requestCert: false,
  rejectUnauthorized: false
};

let port = process.env.PORT || 3000;

let server = https.createServer(options,app);

const path = require('path');


require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS setup to allow other ports from this host

//Only needed if not on Heroku/prod
if (!process.env.DYNO) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://dogcheckin.herokuapp.com");
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });
}

const appRouter = require('./config/routes.js');
app.use(appRouter);

// Moving to parks Controller and Routes
// app.get('/api/grabParks', (req, res) => {
//   let apiCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog%20parks&location=${req.query.latitude},${req.query.longitude}&radius=50&key=${process.env.API_KEY}`;
//   request(apiCall, (err, response, body) => {
//     console.log(err,response,body);
//     res.send(body);
//   });
// });
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});




server.listen( port, function () {
    console.log( 'Express server listening on port ' + server.address().port );
} );
