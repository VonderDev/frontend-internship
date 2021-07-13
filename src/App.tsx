import Routing from './routes/index';
import GlobalStyle from 'shared/style/globalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import './utils/axios/interceptor';

const App = () => {
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
