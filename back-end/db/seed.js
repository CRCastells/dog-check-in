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
	});
};

userCreate()
.then(dogCreate)
.then(function() {
	process.exit();
});