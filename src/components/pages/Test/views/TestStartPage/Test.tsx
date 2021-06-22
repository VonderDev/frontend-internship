import TestAnimation from './TestAnimation';
import ButtonLoadingStart from './ButtonLoadingStart';
import { TextHeader, TextDescription, Containers } from '../../shared/styles/TestPage.styled';
import Container from 'components/Container/Container';
import { TextHeader, TextDescription, Container, ButtonBack } from '../../shared/styles/TestPage.styled';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


function TestStartPage() {
    const history = useHistory();

    return (

        <Container header={null}>
        <Containers>
             <ButtonBack onClick={() => history.push('/')} icon={<LeftOutlined />} />
            <TextHeader>เกมทดสอบพหุปัญญา</TextHeader>
            {/* <TestAnimation /> */}
            <TextDescription>
                มาค้นหาตัวเอง <br />
                ผ่านการเดินทางของคุณเองกันเถอะ
            </TextDescription>
            <ButtonLoadingStart />
        </Containers>
        </Container>
    );
}

export default TestStartPage;
