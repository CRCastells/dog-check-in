module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("dog", {
		name: Sequelize.STRING,
		breed: Sequelize.STRING,
		age: Sequelize.STRING,
		fixed: Sequelize.BOOLEAN,
		description: Sequelize.STRING,
		image: Sequelize.STRING
	});
	return model;
};