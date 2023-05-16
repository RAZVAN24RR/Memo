const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.route('/:name').get(UserController.getUserByName);

module.exports = router;
