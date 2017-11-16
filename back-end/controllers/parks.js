const db = require('../models');
const Park = db.models.Park;
const Checkin = db.models.Checkin;
let request = require('request');

// Show all parks based on map location
function index(req, res) {
	let apiCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog%20parks&location=${req.query.latitude},${req.query.longitude}&radius=50&key=${process.env.API_KEY}`;
    	request(apiCall, (err, response, body) => {
    	// console.log(err,response,body);
    	res.send(body);
	});
}
// Shows one park
function show(req, res) {
	Park.findById(req.params.id, {include: Checkin})
	.then(function(park){
		if(!park) res.send("park not found");
		else res.json(park);
	});
}
// New Park.  Not in Use.
function create(req, res) {
	Park.create(req.body).then(function(park){
		if(!park) res.send("park not saved");
		else res.json(park);
	});
}
// Edit Park.  Not in Use.
function update(req, res) {
	Park.findById(req.params.id)
	.then(function(park){
		if(!park) res.send("park not found");
		else return park.updateAttributes(req.body);
	})
	.then(function(park){
		res.json(park);
	});
}
// Deletes Park.  Not in Use
module.exports.destroy = (req, res)  => {
	Park.findById(req.params.id)
	.then(function(park){
		if(!park) res.send("park not found");
		else return park.destroy();
	})
	.then(function(){
		res.send("park deleted");
	});
};

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
