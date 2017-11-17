const db = require('../models');
const User = db.models.User;
const Dog = db.models.Dog;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// const Connection = db.models.Connection;
// const Checkin = db.models.Checkin;

// Shows all Users.  Where firebase ID matches current user to not see your user. Includes Dogs.
function index(req, res) {
  console.log(req.query);
  User.findAll({
  where: {
    firebase_id: {
      [Op.not]: [req.query.q]
    }
  },
  include: Dog
}).then(function(users) {
    res.json(users);
  });
}
// Find one user. Profile page so matching firebaseID and including Dogs for the User.
function show(req, res) {
  User.findOne({
      where: { firebase_id: req.params.id },
      include: Dog
    }) //, {include: Connection}, {include: Checkin}
    .then(function(user) {
      if (!user) res.send("user not found");
      else res.json(user);
    });
}
// Create new User. 
function create(req, res) {
  // console.log(req.body);
  User.create(req.body).then(function(user) {
    if (!user) res.send("user not saved");
    else res.json(user);
  });
}
// Edit User. Not in Use. 
function update(req, res) {
  User.findById(req.params.id)
    .then(function(user) {
      if (!user) res.send("user not found");
      else return user.updateAttributes(req.body);
    })
    .then(function(user) {
      res.json(user);
    });
}
// Delete user. Not in Use. 
function destroy(req, res) {
  User.findById(req.params.id)
    .then(function(user) {
      if (!user) res.send("user not found");
      else return user.destroy();
    })
    .then(function() {
      res.send("user deleted");
    });
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;