import TestAnimation from './TestAnimation';
import ButtonLoadingStart from './ButtonLoadingStart';
import { TextHeader, TextDescription, Container, ButtonBack } from '../../shared/styles/TestPage.styled';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function TestStartPage() {
    const history = useHistory();

    return (
        <Container>
            <ButtonBack onClick={() => history.push('/')} icon={<LeftOutlined />} />

            <TextHeader>เกมทดสอบพหุปัญญา</TextHeader>
            {/* <TestAnimation /> */}
            <TextDescription>
                มาค้นหาตัวเอง <br />
                ผ่านการเดินทางของคุณเองกันเถอะ
            </TextDescription>
            <ButtonLoadingStart />
        </Container>
    );
}

export default TestStartPage;
