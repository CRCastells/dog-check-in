module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("checkin", {
		checkinDate: Sequelize.STRING,
		time: Sequelize.STRING,
		isActive: Sequelize.BOOLEAN
	});
	return model;
};