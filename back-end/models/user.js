module.exports = function(sequalize, Sequelize) {
	var model = sequalize.define("user", {
		firebase_id: Sequelize.INTEGER,
		name: Sequelize.STRING,
		email: Sequelize.STRING,
		image: Sequelize.STRING,
	});
	return model;
};