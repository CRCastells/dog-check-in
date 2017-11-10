const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');
const dogsController = require('../controllers/dogs.js');


//============
// User Routes
//============

// index
router.get('/api/users', usersController.index);

// create
router.get('/api/users', usersController.create);

// show
router.get('/api/users', usersController.show);

// update
router.get('/api/users', usersController.update);

// destroy
router.get('/api/users', usersController.destroy);

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

// create

// show

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