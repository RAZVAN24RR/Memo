import {
  axiosAuthInstanceToAPI,
  axiosInstanceToAPI,
} from '../Utils/networking.util';

const register = async (name, email, password) => {
  const res = await axiosInstanceToAPI.post('/users', {
    name,
    email,
    password,
  });
  return res;
};

const profile = async (userId) => {
  return (await axiosInstanceToAPI.get(`/users/${userId}`)).data.user;
};
const getUserByName = async (name) => {
  return (await axiosInstanceToAPI.get(`/user/${name}`)).data.user[0];
};
const deleteUser = async (userId) => {
  return await axiosAuthInstanceToAPI.delete(`/users/${userId}`);
};

const UserService = {
  register,
  profile,
  deleteUser,
  getUserByName,
};

export default UserService;
