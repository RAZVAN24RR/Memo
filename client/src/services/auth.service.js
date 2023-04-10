import { axiosInstanceToAPI } from "../Utils/networking.util";

const login = async (email, password) => {
    try {
        const res = await axiosInstanceToAPI.post('/Login', {
            email, password
        });
        return res.data.token;
    } catch(e) {
        return null;
    }
}

const AuthService = {
    login
}

export default AuthService;