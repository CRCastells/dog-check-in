const DB = require("../models").models;

var dogCreate = function() {
	return DB.Dog.create({
		name: 'Domino',
		breed: 'Jack Russel Terrier',
		age: 11,
		fixed: True,
		description: 'Domino does not like other dogs, but loves people',
		image: 'http://snowcreekjackrussell.com/wp-content/uploads/2016/12/jack-russell-puppies-Kurt-7-wks-3.jpg',
	});
};