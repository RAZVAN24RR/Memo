const Team = require('../models/TeamModel');
const TeamService = require('../services/TeamService');
const MessageSchema = require('../models/MessageModel');
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await TeamService.getAllTeams();
    res.status(200).json({
      status: 'success',
      results: teams.length,
      data: {
        teams
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTeam = async (req, res) => {
  try {
    const newTeam = await TeamService.createTeam(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newTeam
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getTeam = async (req, res) => {
  try {
    const team = await TeamService.getTeam(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        team
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.updateTeam = async (req, res) => {
  try {
    const team = await TeamService.updateTeam(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        team
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};
exports.deleteTeam = async (req, res) => {
  try {
    await TeamService.deleteTeam(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'Team deleted successful'
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};
exports.postMessage = async (req, res) => {
  try {
    const { sender, message } = req.body;
    let messageS = new MessageSchema({
      sender,
      message
    });
    // console.log(req.body.params);
    const team = await Team.updateOne(
      { _id: req.params.id },
      { $push: { Messages: messageS } }
    );
    res.status(200).json({
      status: 'success',
      team: {
        team
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};
exports.getAllMessages = async (req, res) => {
  try {
    const teamId = req.params.id;
    console.log(teamId);
    const team = await Team.findById(teamId);
    const teamMes = team.Messages;
    console.log(teamMes);
    res.status(200).json({
      status: 'success',
      data: {
        teamMes
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};
