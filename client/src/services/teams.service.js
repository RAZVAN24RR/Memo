import { axiosInstanceToAPI } from '../Utils/networking.util';

const getAllTeams = async () => {
  return (await axiosInstanceToAPI('/teams')).data.data.teams;
};
const getTeam = async (id) => {
  return await axiosInstanceToAPI(`/teams/${id}`);
};
const createTeam = async (ProjectName, Description, Members) => {
  const res = await axiosInstanceToAPI.post('/teams', {
    ProjectName,
    Description,
    Members,
  });
  return res;
};
const TeamService = {
  getAllTeams,
  getTeam,
  createTeam,
};

export default TeamService;
