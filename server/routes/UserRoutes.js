const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.route('/').get(UserController.getAllUsers);

module.exports = router;
