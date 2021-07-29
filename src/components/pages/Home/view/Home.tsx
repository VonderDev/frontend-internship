import { useHistory } from 'react-router-dom';
import { CreateContentIcon } from '../shared/style/homepage.styles';
import Container from 'components/Container/Container';
import Board from 'components/pages/Board/views/BoardPage/Board';
import StartTest from 'components/pages/Home/view/StartTest';
function Home() {
    const history = useHistory();
    return (
        <Container header={{ title: 'Vonder Me', right: 'menu' }}>
            <StartTest />
            <Board />
            <CreateContentIcon onClick={() => history.push('/boardcreate')} />
        </Container>
    );
}

export default Home;
