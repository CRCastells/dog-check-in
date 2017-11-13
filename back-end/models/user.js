module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("user", {
		firebase_id: Sequelize.STRING,
		name: Sequelize.STRING,
		email: Sequelize.STRING,
		image: Sequelize.STRING,
	});
	return model;
};