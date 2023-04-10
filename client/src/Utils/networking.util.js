import axios from "axios";

export const host = 'localhost';
export const hostWithPort = `${host}:8000`;
export const baseHttpURL = `http://${hostWithPort}/api/v1`;
export const baseURLPref = `${baseHttpURL}`;
const timeout = 30000e3;

export const axiosInstanceToAPI = axios.create({
    baseURL: baseURLPref,
    timeout,
});

export const axiosAuthInstanceToAPI = axios.create({
    baseURL: baseURLPref,
    timeout,
    headers: {
        "Access-Control-Allow-Origin"   : "*",
        "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers" : "Content-Type, Authorization, X-Requested-With",
        Authorization: localStorage.getItem('jwt')
    }
});