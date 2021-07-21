import TestAnimation from './TestAnimation';
import ButtonLoadingStart from './ButtonLoadingStart';
import { TextHeader, TextDescription, Container } from '../../shared/styles/TestPage.styled';

function TestStartPage() {
    return (
        <Container>
            <TextHeader>แบบทดสอบความถนัด</TextHeader>
            <TestAnimation />
            <TextDescription>
                แบบทดสอบนี้ทำขึ้นเพื่อ ... lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br />
                text ever since the 1500s
            </TextDescription>
            <ButtonLoadingStart />
        </Container>
    );
}

export default TestStartPage;
