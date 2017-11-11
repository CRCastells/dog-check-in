module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("checkin", {
		isActive: Sequelize.BOOLEAN
	});
	return model;
};