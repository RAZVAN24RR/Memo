const express = require('express');
const SignUpController = require('../controllers/SignUpController');

const router = express.Router();

router.route('').post(SignUpController.createUser);

module.exports = router;
