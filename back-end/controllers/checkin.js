const db = require('../models');
const Checkin = db.models.Checkin;
const Park = db.models.Park;
const User = db.models.User;

module.exports.create = (req, res) => {
    let park = req.body.marker;
    let firebase_id = req.body.user.uid;
    console.log("park:",park,"firebase:",firebase_id);
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
        });
};

module.exports.show = (req, res) => {
    let checkinArray = [];
    console.log(req.params.name);
    Park.findAll({where: {name: req.params.name}})
    .then(parks => {
        let park = parks[0].dataValues.id;
        console.log(park);
        Checkin.findAll({where: {parkId: park}})
        .then(checkins => {
            checkin = checkins;
            checkin.forEach(function(data) {
                // console.log(data.dataValues.userId);
                User.findAll({where: {id: data.dataValues.userId}})
                .then(response => {
                    // console.log(response[0].dataValues.name);
                    checkinArray.push(response[0].dataValues);
                    // console.log(checkinArray);
                });
            });
            setTimeout(function(){
                res.json(checkinArray);
                console.log(checkinArray);
            }, 500);
        });
    });
};