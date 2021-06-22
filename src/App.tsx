import Routing from './routes/index';
import GlobalStyle from 'shared/style/globalStyle';
import { BrowserRouter as Router  } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Router>
        <GlobalStyle/>
        <Routing />
        </Router>

        </>
    );
};

export default App;
