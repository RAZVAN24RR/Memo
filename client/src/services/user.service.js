import { axiosInstanceToAPI } from '../Utils/networking.util';

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

const UserService = {
  register,
  profile,
};

export default UserService;
