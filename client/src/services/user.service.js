import { axiosInstanceToAPI } from "../Utils/networking.util";

const register = async (name, email, rank, password) => {
    const res = await axiosInstanceToAPI.post('/users', {
        name, email, rank, password
    });
    return res;
}

const profile = async userId => {
    return (await axiosInstanceToAPI.get(`/users/${userId}`)).data.data.user;
}

const UserService = {
    register, 
    profile
}

export default UserService;