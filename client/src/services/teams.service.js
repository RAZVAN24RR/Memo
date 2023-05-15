import { axiosInstanceToAPI } from '../Utils/networking.util';

const getAllTeams = async () => {
  return (await axiosInstanceToAPI('/teams')).data.data.teams;
};
const getTeam = async (id) => {
  return await axiosInstanceToAPI(`/teams/${id}`);
};
const TeamService = {
  getAllTeams,
  getTeam,
};

export default TeamService;
