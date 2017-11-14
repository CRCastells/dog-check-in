const db = require('../models');
const Dog = db.models.Dog;


function index(req, res) {
	Dog.findAll().then(function(dogs) {
		res.json(dogs);
	});
}

function show(req, res) {
	Dog.findById(req.params.id)
	.then(function(dog){
		if(!dog) res.send("dog not found");
		else res.json(dog);
	});
}

function create(req, res) {
	console.log(req);
	Dog.create(req.body).then(function(dog){
		if(!dog) res.send("dog not saved");
		else res.json(dog);
	});
}

function update(req, res) {
	Dog.findById(req.params.id)
	.then(function(dog){
		if(!dog) res.send("dog not found");
		else return dog.updateAttributes(req.body);
	})
	.then(function(dog){
		res.json(dog);
	});
}

function destroy(req, res) {
	Dog.findById(req.params.id)
	.then(function(dog){
		if(!dog) res.send("dog not found");
		else return dog.destroy();
	})
	.then(function(){
		res.send("dog deleted");
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
