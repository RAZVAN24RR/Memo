import axios from 'axios';

export const host = process.env.REACT_APP_SV_ADR;
export const baseHttpURL = `http://${host}/api/v1`;
export const baseURLPref = `${baseHttpURL}`;
const timeout = 30000e3;

export const axiosInstanceToAPI = axios.create({
  baseURL: baseURLPref,
  timeout,
  jwt: localStorage.getItem('jwt'),
});

export const axiosAuthInstanceToAPI = axios.create({
  baseURL: baseURLPref,
  timeout,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, X-Requested-With',
    Authorization: localStorage.getItem('jwt'),
  },
});
axiosInstanceToAPI.interceptors.request.use(
  (config) => {
    const token = `${localStorage.getItem('jwt')}`;
    config.headers['Authorization'] = `${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
