const db = require('../models');
const Checkin = db.models.Checkin;
const Park = db.models.Park;
const User = db.models.User;

module.exports.create = (req, res) => {
    console.log('PARK INFO:', req.body.marker);
    let park = req.body.marker;
    let firebase_id = req.body.user.uid;
    console.log('USER FIREBASEID:', req.body.user.uid);
    Park.findOrCreate({ where: park })
        .spread((parkdata, created) => {
            console.log(parkdata.dataValues);
            User.findOne({
                where: {
                    firebase_id
                }
            })
            .then(function(userdata) {
            	console.log(userdata);
            	Checkin.create({parkId:parkdata.dataValues.id,userId:userdata.dataValues.id})
            		.then(response => {
            			console.log(response);
            		});
            });
        });


    //check to see if park is in DB
    //if yes
    //create new checking with userid and parkid
    //no
    //create new park in db
    //find user based off of firebaseID
    //create new checking with userid and parkid
};