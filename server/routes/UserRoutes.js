const express = require('express');
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router
  .route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router.route('/:id').get(UserController.getUser);
router.delete('/:id', AuthMiddleware.isloggedIn, UserController.deleteUser);

router.patch('/addTeam', UserController.addTeamtoUser)

router.patch('/', AuthMiddleware.isloggedIn, UserController.updateUserSkills);
module.exports = router;
