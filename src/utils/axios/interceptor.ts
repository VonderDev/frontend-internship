import axios from 'axios';

//console.log("✿ axios interceptor has been set up ✿")
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            //console.log('[This is token]:', token);
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.baseURL = `${process.env.REACT_APP_API_API}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);