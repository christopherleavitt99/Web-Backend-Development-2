// const router = require('express').Router();
const express = require('express')
const router = express.Router();
// const { Router } = require('express');
// const myController = require('../controllers');
// const router = require('./contacts');

// routes.get('/', myController.awesomeFunction);
// routes.get('/awesome', myController.returnAnotherPerson);
router.use('./contacts', require('./contacts'))

module.exports = router;