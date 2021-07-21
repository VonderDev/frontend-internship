import styled from 'styled-components';
import { Button, Col, Row } from 'antd';

export const TextQuestionIndex = styled.div`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 15px;
    transform: translateY(100%);
`;

export const ButtonStartOver = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: #7879f1;
    background-color: #ffffff;
    width: 5rem;
    height: 6vh;
    left: 31rem;
    bottom: 3rem;
`;

export const ButtonNextQuestion = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: #7879f1;
    background-color: #ffffff;
    width: 5rem;
    height: 6vh;
    right: 4rem;
    bottom: 3rem;
`;

export const ButtonPrevQuestion = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: #7879f1;
    background-color: #ffffff;
    width: 5rem;
    height: 6vh;
    left: -5rem;
    bottom: 3rem;
`;

export const TextQuestion = styled.div`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
    transform: translateY(150%);
`;

export const ContainerButton = styled(Col)`
    align-items: center;
    justify-content: center;
    display: grid;
`;
export const ButtonChoiceStlyed = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: #7879f1;
    transform: translateY(2rem);
    width: 15rem;
    height: 6vh;
    margin-top: 5px;
    letter-spacing: 1px;
    box-shadow: 2px 5px #e2e2e2;
`;
