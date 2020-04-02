import axios from 'axios';
import { history } from '../routes';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
    if (!sessionStorage.getItem('token')) return config;

    const token = JSON.parse(sessionStorage.getItem('token'));

    if (token) config.headers.Authorization = `Bearer ${token.value}`;

    return config;
});

api.interceptors.response.use(response => {
    return response;
}, error => {
    const response = error.response;

    if (response.status === 401 && response.data.error === "Invalid auth token") {
        history.push('/login');
    }

    return Promise.reject(error);
});

export default api;
