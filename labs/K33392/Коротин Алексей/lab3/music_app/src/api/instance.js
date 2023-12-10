import axios from 'axios'
import { authStore } from '@/stores/authStore';

const apiUrl = 'http://localhost:3000';
export const api = axios.create({ baseURL: apiUrl });

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status == 401) {
            authStore.logout();
        }
    }
);
