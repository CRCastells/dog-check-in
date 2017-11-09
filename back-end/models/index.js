//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://<username>@localhost:5432/<database>');

// Export Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

// Declare varibales and import models
const User = sequelize.imports("./user");
const Park = sequelize.imports("./park");
const Dog = sequelize.imports("./dog");
const Connection = sequelize.imports("./connection");
const Checkin = sequelize.imports("./checkin");

// Establish database relationships
Dog.belongsTo(User);
User.hasMany(Dog);

Checkin.belongsTo(User);
User.hasMany(Checkin);

Checkin.belongsTo(Park);
Park.hasMany(Checkin);

User.hasMany(Connection);
Connection.hasMany(User);

// Export models
module.exports.models = {
	User: User,
	Park: Park,
	Dog: Dog,
	Connection: Connection,
	Checkin: Checkin
};

