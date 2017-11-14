var DB = require("../models");

DB.sequelize.sync({force: false}).then(function(){
  process.exit();
});