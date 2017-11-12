const db = require('../models');
const Connection = db.models.Connection;

function create(req, res) {
	Connection.create(req.body).then(function(connection){
		if(!connection) res.send("connection not saved");
		else res.json(connection);
	});
}