import Routing from './routes/index';
import GlobalStyle from 'shared/style/globalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';
import { SWRConfig } from 'swr';

let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://localhost:5000';

const token = localStorage.getItem('token');

if (token) {
    axios.defaults.headers.common['Authorization'] = token;
}

const App = () => {
    useEffect(() => {
        console.log(token);
    }, [token]);

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
