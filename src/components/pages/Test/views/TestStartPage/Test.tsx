import ButtonLoadingStart from './ButtonLoadingStart';
import Container from 'components/Container/Container';
import { TextHeader, TextDescription, ContainerTestPage, ButtonBack } from '../../shared/styles/TestPage.styled';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function TestStartPage() {
    const history = useHistory();

    return (
        <Container header={null}>
            <ContainerTestPage>
                <ButtonBack onClick={() => history.push('/')} icon={<LeftOutlined />} />
                <TextHeader>เกมทดสอบพหุปัญญา</TextHeader>
                {/* <TestAnimation /> */}
                <TextDescription>
                    มาค้นหาตัวเอง <br />
                    ผ่านการเดินทางของคุณเองกันเถอะ
                </TextDescription>
                <ButtonLoadingStart />
            </ContainerTestPage>
        </Container>
    );
}

export default TestStartPage;
