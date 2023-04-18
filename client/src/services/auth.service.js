import { axiosInstanceToAPI } from "../Utils/networking.util";

const login = async (email, password) => {
    let res = null;;
    try {
        res = await axiosInstanceToAPI.post('/Login', {
            email, password
        });
        console.log('hereeeeeeeeeeeeeeeee');    
        return {_jwt: res?.data?.token, code: res?.status, error: res?.error};
    } catch(e) {
        console.log(e.response);
        return {_jwt: '', code: e.response.status, error: e.response.data.error};
    }
}

const AuthService = {
    login
}

export default AuthService;