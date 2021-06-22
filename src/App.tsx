import Routing from './routes/index';
import GlobalStyle from 'shared/style/globalStyle';
import Container from 'components/Container/Container';

const App = () => {
    return (
        <>
        <GlobalStyle/>
        <Routing />
        </>
    );
};

export default App;
