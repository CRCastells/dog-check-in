module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("checkin", {
		checkinDate: Sequelize.DATE,
		time: Sequelize.STRING,
		isActive: Sequelize.BOOLEAN
	});
	return model;
};