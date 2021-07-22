import axios from 'axios';

//console.log("✿ axios interceptor has been set up ✿")
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        const tokenGuest = localStorage.getItem('tokenGuest');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (tokenGuest) {
            config.headers.Authorization = `Bearer ${tokenGuest}`;
        }
        config.baseURL = `${process.env.REACT_APP_API_URL}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);