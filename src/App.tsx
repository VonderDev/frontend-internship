import Routing from './routes/index';
import GlobalStyle from 'shared/style/globalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import './utils/axios/interceptor';
import { AppProvider } from 'components/GameElement/PixiStore/AppContext';

const App = () => {
    return (
        <>
            <AuthProvider>
                <AppProvider>
                    <Router>
                        <GlobalStyle />
                        <Routing />
                    </Router>
                </AppProvider>
            </AuthProvider>
        </>
    );
};

export default App;
