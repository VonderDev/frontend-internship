import Routing from './routes/index';
import GlobalStyle from 'shared/style/globalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import { useCallback, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const axiosGlobalConfig = useCallback(() => {
        const token = localStorage.getItem('token');

        axios.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                config.baseURL = `${process.env.REACT_APP_API}`;
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );
    }, []);

    useEffect(() => {
        axiosGlobalConfig();
    }, [axiosGlobalConfig]);

    console.log('ENV :' ,`${process.env.REACT_APP_API}`)
    return (
        <>
            <AuthProvider>
                <Router>
                    <GlobalStyle />
                    <Routing />
                </Router>
            </AuthProvider>
        </>
    );
};

export default App;
