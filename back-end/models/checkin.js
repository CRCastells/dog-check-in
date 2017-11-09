module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("checkin", {
		userId: Sequelize.INTEGER,
		parkId: Sequelize.INTEGER,
		checkinDate: Sequelize.DATE,
		time: Sequelize.STRING,
		isActive: Sequelize.BOOLEAN
	});
	return model;
};