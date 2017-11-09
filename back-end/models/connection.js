module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("connection", {
		userId: Sequelize.INTEGER,
		followerId: Sequelize.INTEGER
	});
	return model;
};