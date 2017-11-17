const db = require('../models');
const Connection = db.models.Connection;

// All Connections 
function index(req, res) {
	console.log("index hit");
	Connection.findAll().then(function(connections) {
		res.json(connections);
	});
}
// One Connection
function show(req, res) {
	Connection.findById(req.params.id)
	.then(function(connection){
		if(!connection) res.send("connection not found");
		else res.json(connection);
	});
}
// New Connection
function create(req, res) {
	Connection.create(req.body).then(function(connection){
		if(!connection) res.send("connection not saved");
		else res.json(connection);
	});
}
// Deletes Connection
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