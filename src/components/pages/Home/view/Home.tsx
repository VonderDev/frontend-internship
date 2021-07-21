import { useHistory } from 'react-router-dom';
import { FileAddOutlined } from '@ant-design/icons';
import { ButtonCreatePost } from '../shared/style/homepage.styles';
import Container from 'components/Container/Container';
import Board from 'components/pages/Board/views/BoardPage/Board';
import StartTest from 'components/pages/Home/view/StartTest';
function Home() {
    const history = useHistory();
    return (
        <Container header={{ title: 'Vonder Me', right: 'menu' }}>
            <StartTest />
            <Board />
            <ButtonCreatePost onClick={() => history.push('/boardcreate')} shape="circle">
                <FileAddOutlined />
            </ButtonCreatePost>
        </Container>
    );
}

export default Home;
