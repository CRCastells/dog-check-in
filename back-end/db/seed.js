const DB = require("../models").models;

var dogCreate = function() {
	return DB.Dog.create({
		name: 'Domino',
		breed: 'Jack Russel Terrier',
		age: 11,
		fixed: 'True',
		description: 'Domino does not like other dogs, but loves people',
		image: 'http://snowcreekjackrussell.com/wp-content/uploads/2016/12/jack-russell-puppies-Kurt-7-wks-3.jpg',
		userId: "1"
	});
};

var userCreate = function() {
	return DB.User.create({
		firebase_id: '103483889694077553941',
		name: 'Jeff Engleberg',
		email: 'jeff.engleberg@gmail.com',
		image: ""
	}).then(function(user) {
		connectionCreate(user.id);
		checkinCreate(user.id);
	});
};

var parkCreate = function() {
	return DB.Park.create({
		name: "Lowry Dog Park",
		address: "Yosemite Way & E 4th Pl, Denver, CO 80230, United States",
		lat: 39.7191456,
		lng: -104.8810672,
		image: "https://maps.google.com/maps/contrib/110441640603734149754/photos"
	}).then(function(park) {
		checkinCreate(park.id);
	});
};

var connectionCreate = function(userId) {
	return DB.Connection.create({
		userId: userId,
		followerId: userId
	});
};

var checkinCreate = function(userId, parkId) {
	return DB.Checkin.create({
		isActive: 'True',
		userId: userId,
		parkId: parkId
	});
};

userCreate()
.then(parkCreate)
.then(dogCreate)
.then(function() {
	process.exit();
});