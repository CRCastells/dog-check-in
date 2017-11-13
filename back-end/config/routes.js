const express 				= require('express');
const router 				= express.Router();
const usersController 		= require('../controllers/users.js');
const dogsController 		= require('../controllers/dogs.js');
const parksController 		= require('../controllers/parks.js');
// const connectionsController = require('../controllers.connections.js');
// const checkinsController 	= require('../controllers.checkins.js');

//============
// User Routes
//============

// index
router.get('/api/users', usersController.index);

// create
router.post('/api/users', usersController.create);

// show
router.get('/api/users/:id', usersController.show);

// update
router.put('/api/users/:id', usersController.update);

// destroy
router.get('/api/users/:id', usersController.destroy);



//============
// Dog Routes
//============

// index
router.get('/api/dogs', dogsController.index);

// create
router.post('/api/dogs', dogsController.create);

// show
router.get('/api/dogs/:id', dogsController.show);

// update
router.put('/api/dogs/:id', dogsController.update);

// destroy
router.delete('/api/dogs/:id', dogsController.destroy);

//============
// Park Routes
//============

// index
router.get('/api/grabParks/', parksController.index);

// create
router.post('/api/parks/', parksController.create);

// show
router.get('/api/parks/:id', parksController.show);

// update
router.put('api/parks/:id', parksController.update);

// destroy
router.delete('api/parks/:id', parksController.destroy);

//===================
// Connections Routes
//===================

// // index
// router.get('/api/connections/', connectionsController.index);


// // create
// router.get('/api/connections/', connectionsController.create);

// create
// router.post('/api/connections/', connectionsController.create);


// // show
// router.get('/api/connections/:id', connectionsController.show);


// // update
// router.get('api/connections/:id', connectionsController.update);

// // destroy
// router.get('api/connections/:id', connectionsController.destroy);

// update
// router.put('api/connections/:id', connectionsController.update);

// destroy
// router.delete('api/connections/:id', connectionsController.destroy);


// //===============
// // Checkin Routes
// //===============

// // index
// router.get('/api/checkins/', checkinsController.index);


// // create
// router.get('/api/checkins/', checkinsController.create);

// create
// router.post('/api/checkins/', checkinsController.create);


// // show
// router.get('/api/checkins/:id', checkinsController.show);


// // update
// router.get('api/checkins/:id', checkinsController.update);

// // destroy
// router.get('api/checkins/:id', checkinsController.destroy);

// update
// router.put('api/checkins/:id', checkinsController.update);

// // destroy
// router.delete('api/checkins/:id', checkinsController.destroy);


module.exports = router;