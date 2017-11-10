const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');
const dogsController = require('../controllers/dogs.js');
const parksController = require('../controllers/parks.js');


//============
// User Routes
//============

// index
router.get('/api/users', usersController.index);

// create
router.get('/api/users', usersController.create);

// show
router.get('/api/users:id', usersController.show);

// update
router.get('/api/users:id', usersController.update);

// destroy
router.get('/api/users:id', usersController.destroy);

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
router.get('/api/dogs/:id', dogsController.update);

// destroy
router.get('/api/dogs/:id', dogsController.destroy);

//============
// Park Routes
//============

// index
router.get('/api/parks/', parksController.index);

// create
router.get('/api/parks/', parksController.create);

// show
router.get('/api/parks/', parksController.show);

// update
router.get('api/parks/:id', parksController.update);

// destroy
router.get('api/parks/:id', parksController.destroy);

//===================
// Connections Routes
//===================

// index

// create

// show

//===============
// Checkin Routes
//===============

// index

// create

// show

module.exports = router;