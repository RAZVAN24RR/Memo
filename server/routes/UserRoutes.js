const express = require('express');
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router
  .route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route('/:id')
  .get(UserController.getUser)
router.delete('/:id', AuthMiddleware.loggedIn, UserController.deleteUser)
router.patch('/', AuthMiddleware.loggedIn, UserController.updateUserSkills);

module.exports = router;
