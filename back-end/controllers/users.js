const db = require('../models');
const User = db.models.User;
const Dog = db.models.Dog;
// const Connection = db.models.Connection;
// const Checkin = db.models.Checkin;


function index(req, res) {
  User.findAll({ include: Dog }).then(function(users) {
    res.json(users);
  });
}

function show(req, res) {
  User.findOne({ where: { firebase_id: req.params.id } }, { include: Dog }) //, {include: Connection}, {include: Checkin}
    .then(function(user) {
      if (!user) res.send("user not found");
      else res.json(user);
    });
}

function create(req, res) {
  console.log(req.body);
  User.create(req.body).then(function(user) {
    if (!user) res.send("user not saved");
    else res.json(user);
  });
}

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