module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("park", {
		name: Sequelize.STRING,
		address: Sequelize.STRING,
		lat: Sequelize.DECIMAL,
		lng: Sequelize.DECIMAL,
		image: Sequelize.STRING
	});
	return model;
};