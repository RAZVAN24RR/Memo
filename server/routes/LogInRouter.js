const express = require('express');

const LogInController = require('../controllers/LogInController');

const router = express.Router();

router.route('').post(LogInController.signUpUser);

module.exports = router;
