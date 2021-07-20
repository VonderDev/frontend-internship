import { useHistory } from 'react-router-dom';
import { FileAddOutlined } from '@ant-design/icons';
import { ButtonCreatePost } from '../shared/style/homepage.styles';
import Container from 'components/Container/Container';
import StartTestComponent from './StartTest';
import BoardListLatest from './BoardListLatest';

function Home() {
    const history = useHistory();
    return (
        <Container header={{ title: 'Vonder Me', right: 'menu' }}>
            <StartTestComponent />
            <BoardListLatest />
            <ButtonCreatePost onClick={() => history.push('/boardcreate')} shape="circle">
                <FileAddOutlined />
            </ButtonCreatePost>
        </Container>
    );
}

export default Home;
