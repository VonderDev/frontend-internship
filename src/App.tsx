import Routing from './routes/index';
import styled from 'styled-components';
import Burger from 'components/pages/Burger/Burger';
import { Layout } from 'antd';
import GlobalStyle from 'shared/style/globalStyle';
import Container from 'components/Container/Container';

const { Header, Content, Footer } = Layout;

const AppContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    z-index: 0;
`;
const MainContent = styled(Content)`
    height: calc(110vh - 80px);
    width: 100%;
    overflow-y: scroll;
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <MainContent>
                    <Routing />
                </MainContent>
            </AppContainer>
        </>
    );
};

export default App;
