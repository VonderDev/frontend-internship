import styled from 'styled-components';
import { ButtonStartOver } from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import Chart from './Chart';
import Descrip from './Descrip';
import { ButtonGoHome, ContainerResult, TextHeader } from '../../shared/styles/ResultPage.styled';
import Container from 'components/Container/Container';

const Result = () => {
    const history = useHistory();
    return (
        <>
            <Container header={null}>
                <ContainerResult>
                    <TextHeader>ผลลัพธ์</TextHeader>
                    <ButtonStartOver type="primary" onClick={() => history.push('/')}>
                        เริ่มใหม่{' '}
                    </ButtonStartOver>
                    <Chart />
                    <Descrip />
                    <ButtonGoHome onClick={() => history.push('/')}>กลับหน้าหลัก</ButtonGoHome>
                </ContainerResult>
            </Container>
        </>
    );
};

export default Result;
