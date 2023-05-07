const express = require('express');

const TeamController = require('../controllers/TeamController');

const router = express.Router();

router
  .route('/')
  .get(TeamController.getAllTeams)
  .post(TeamController.createTeam);

router
  .route('/:id')
  .get(TeamController.getTeam)
  .patch(TeamController.updateTeam)
  .delete(TeamController.deleteTeam);
module.exports = router;
