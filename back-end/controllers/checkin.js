const db = require('../models');
const Checkin = db.models.Checkin;
const Park = db.models.Park;
const User = db.models.User;

module.exports.create = (req, res) => {
    let park = req.body.marker;
    let firebase_id = req.body.user.uid;
    Park.findOrCreate({ where: park })
        .spread((parkdata, created) => {
            console.log(parkdata.dataValues);
            User.findOne({
                where: {
                    firebase_id
                }
            })
            .then(function(userdata) {
            	console.log("then",userdata.dataValues);
            	Checkin.upsert({parkId:parkdata.dataValues.id,userId:userdata.dataValues.id})
            		.then(response => {
            			console.log(response);
            		});
            })
            .catch(function(err) {
                // // print the error details
                // console.log(err);
            });
        });
};

module.exports.show = (req, res) => {
    console.log(req.params.name);
    Park.findAll({where: {name: req.params.name}})
    .then(parks => {
        let park = parks[0].dataValues.id;
        console.log(park);
        Checkin.findAll({where: {parkId: park}})
        .then(checkins => {
            let checkInfo = checkins[0].dataValues;
            console.log(checkins);
            console.log("USER ID:",checkInfo.userId);
        });
    });
};