import styled from 'styled-components';
import { ButtonStartOver } from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import Chart from './Chart';
import Descrip from './Descrip';
import { ButtonLoading, ContainerResult, TextHeader } from '../../shared/styles/ResultPage.styled';
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
            <ButtonLoading onClick={() => history.push('/')} >กลับหน้าหลัก</ButtonLoading>
            </ContainerResult>
        </Container>

        </>
    );
};

export default Result;
