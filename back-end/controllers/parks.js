const db = require('../models');
const Park = db.models.Park;

function index(req, res) {
	Park.findAll().then(function(parks) {
		res.json(parks);
	});
}

function show(req, res) {
	Park.findById(req.params.id)
	.then(function(park){
		if(!park) res.send("park not found");
		else res.json(park);
	});
}

function create(req, res) {
	Park.create(req.body).then(function(park){
		if(!park) res.send("park not saved");
		else res.json(park);
	});
}

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

function destroy(req, res) {
	Park.findById(req.params.id)
	.then(function(park){
		if(!park) res.send("park not found");
		else return park.destroy();
	})
	.then(function(){
		res.send("park deleted");
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;