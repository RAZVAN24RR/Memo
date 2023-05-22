const express = require('express');

const TeamController = require('../controllers/TeamController');
const AdminMiddleware = require('../middlewares/isAdmin.middleware');
const AuthMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router
  .route('/')
  .get(AuthMiddleware.isloggedIn, TeamController.getAllTeams)
  .post(
    // AdminMiddleware.isManager,
    // AdminMiddleware.isManager,
    TeamController.createTeam
  );

router
  .route('/:id')
  .get(TeamController.getTeam)
  .patch(TeamController.updateTeam)
  .delete(TeamController.deleteTeam);
module.exports = router;
