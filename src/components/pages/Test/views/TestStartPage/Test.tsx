import TestAnimation from './TestAnimation';
import ButtonLoadingStart from './ButtonLoadingStart';
import { TextHeader, TextDescription, Containers } from '../../shared/styles/TestPage.styled';
import Container from 'components/Container/Container';

function TestStartPage() {
    return (
        <Container header={null}>
        <Containers>
            <TextHeader>แบบทดสอบความถนัด</TextHeader>
            <TestAnimation />
            <TextDescription>
                แบบทดสอบนี้ทำขึ้นเพื่อ ... lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br />
                text ever since the 1500s
            </TextDescription>
            <ButtonLoadingStart />
        </Containers>
        </Container>
    );
}

export default TestStartPage;
