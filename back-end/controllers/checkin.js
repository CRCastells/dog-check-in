const db = require('../models');
// bringing in data models for Checkin and relationships
const Checkin = db.models.Checkin;
const Park = db.models.Park;
const User = db.models.User;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// create checkin and establishing relationship for parks and users
module.exports.create = (req, res) => {
    let park = req.body.marker;
    let firebase_id = req.body.user.uid;
    // console.log("Request", req.body);
    // console.log("park:",park,"firebase:",firebase_id);
    Park.findOrCreate({ where: park })
        .spread((parkdata, created) => {
            // console.log(parkdata.dataValues);
            User.findOne({
                where: {
                    firebase_id
                }
            })
            .then(function(userdata) {
            	// console.log("then",userdata.dataValues);
            	Checkin.upsert({parkId:parkdata.dataValues.id,userId:userdata.dataValues.id})
            		.then(response => {
            			// console.log(response);
            		});
            });
        });
};

// Show checkins
module.exports.show = (req, res) => {
    let park = req.body.marker; // sets checked in park to map marker

    let checkinArray = [];
    // console.log("park:", park);
    Park.findOrCreate({where: park })
        .spread((parkdata, created) => {
            // console.log(parkdata.dataValues)
            Checkin.findAll({
                where: {
                    parkId: parkdata.dataValues.id,
                    updatedAt: { [Op.gt]: new Date(new Date() - 1000 * 60 * 60) }
                }
            })
            .then(checkins => {
                checkin = checkins;
                checkin.forEach(function(data) {
                    // console.log(data.dataValues.userId);
                    User.findAll({
                        where: {
                            id: data.dataValues.userId
                        }
                    })
                    .then(response => {
                        // console.log(response[0].dataValues.name);
                        checkinArray.push(response[0].dataValues);
                        // console.log(checkinArray);
                    });
                });
                setTimeout(function(){ // sets timeout on checkins
                    res.json(checkinArray);
                    // console.log(checkinArray);
                }, 500);
            });
        });
};