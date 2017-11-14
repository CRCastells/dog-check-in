//Connect
var Sequelize = require('sequelize');
require('dotenv').config();
var sequelize = new Sequelize(process.env.DATABASE_URL);


// Export Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

// Declare varibales and import models
const User = sequelize.import("./user");
const Park = sequelize.import("./park");
const Dog = sequelize.import("./dog");
const Follower = sequelize.import("./user");
const Checkin = sequelize.import("./checkin");
const Connection = sequelize.import('./connection');

// Establish database relationships
Dog.belongsTo(User);
User.hasMany(Dog);

// Checkin.belongsTo(User);
// User.hasMany(Checkin);

// Checkin.belongsTo(Park);
// Park.hasMany(Checkin);

User.belongsToMany(Park, { as: 'checkedInUser', through: 'checkin', foreignKey: 'userId' });
Park.belongsToMany(User, { as: 'parkId', through: 'checkin', foreignKey: 'parkId' });

User.belongsToMany(Follower, { as: 'followerId', through: 'connection', foreignKey: 'userId' });
Follower.belongsToMany(User, { as: 'userId', through: 'connection', foreignKey: 'userId' });


// Export models
module.exports.models = {
    User: User,
    Park: Park,
    Dog: Dog,
    Checkin: Checkin,
    Connection: Connection
};