module.exports = function(sequelize, Sequelize) {
	var model = sequalize.define("park", {
		name: Sequelize.STRING,
		address: Sequelize.STRING,
		latitude: Sequelize.STRING,
		longitude: Sequelize.STRING,
		description: Sequelize.STRING,
		image: Sequelize.STRING
	});
	return model;
};