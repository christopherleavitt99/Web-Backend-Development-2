// Commented code is from assignment 1
// const router = require('express').Router();

// const { Router } = require('express');
// const myController = require('../controllers');
// const router = require('./contacts');

// routes.get('/', myController.awesomeFunction);
// routes.get('/awesome', myController.returnAnotherPerson);

const express = require('express');
const router = express.Router();
router.use('/contacts', require('./contacts'));

module.exports = router;