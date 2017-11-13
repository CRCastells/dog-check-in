const db = require('../models');
const Connection = db.models.Connection;

function index(req, res) {
	Connection.findAll().terhn(function(connections) {
		res.json(connections);
	});
}

function show(req, res) {
	Connection.findById(req.params.id)
	.then(function(connection){
		if(!connection) res.send("connection not found");
		else res.json(connection);
	});
}

function create(req, res) {
	Connection.create(req.body).then(function(connection){
		if(!connection) res.send("connection not saved");
		else res.json(connection);
	});
}

function destroy(req, res) {
	Connection.findById(req.params.id)
	.then(function(connection){
		if(!connection) res.send("You are not following this user");
		else return connection.destroy();
	})
	.then(function(){
		res.send("User unfollowed");
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.destroy = destroy;