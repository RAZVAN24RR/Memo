const Team = require('../models/TeamModel');

const getAllTeams = async () => {
  return await Team.find();
};

const createTeam = async ({ Members, ProjectName, Description }) => {
  let team = new Team({
    Members,
    ProjectName,
    Description
  });
  return await team.save();
};

const getTeam = async id => {
  return await Team.findById(id, { _id: 0 });
};

const updateTeam = async (id, data) => {
  return await Team.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

const deleteTeam = async id => {
  return await Team.findByIdAndDelete(id);
};

const TeamService = {
  getAllTeams,
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam
};

module.exports = TeamService;
