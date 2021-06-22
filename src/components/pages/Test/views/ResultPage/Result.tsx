import styled from 'styled-components';
import { ButtonStartOver } from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { HomeFilled } from '@ant-design/icons';
import Chart from './Chart';
import Descrip from './Descrip';
import { ButtonHome, ButtonStart } from '../../shared/styles/ResultPage.styled';
import Container from 'components/Container/Container';

const Result = () => {
    const history = useHistory();
    return (
        <>
        <Container header={{children: 'ผลลัพธ์' }}>
        <ButtonHome onClick={() => history.push('/')}>
                <HomeFilled style={{ fontSize: '30px' }} />
            </ButtonHome>
            <ButtonStart onClick={() => history.push('/test')}>เริ่มใหม่</ButtonStart>
            <Chart />
            <Descrip />
        </Container>

        </>
    );
};

export default Result;
