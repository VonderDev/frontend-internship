import { ButtonSeeAllResults } from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { ContainerResult, TextHeader } from '../../shared/styles/ResultPage.styled';
import Container from 'components/Container/Container';

const Result = () => {
    const history = useHistory();
    return (
        <>
            <Container header={null}>
                <ContainerResult>
                    <TextHeader>คุณลักษณะเด่น 2 ด้าน</TextHeader>
                    <ButtonSeeAllResults type="primary" onClick={() => history.push('/resultinfo')}>
                        ผลลัพธ์ทั้งหมด
                    </ButtonSeeAllResults>
                </ContainerResult>
            </Container>
        </>
    );
};

export default Result;
