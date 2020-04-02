import axios from 'axios';
import { history } from '../routes';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
    const token = sessionStorage.getItem('token');

    if (token) config.headers.Authorization = `Bearer ${token}`;

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
