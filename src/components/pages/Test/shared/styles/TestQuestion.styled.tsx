import styled from 'styled-components';
import { Button, Col } from 'antd';
import ImgTestQuestion from '../../shared/images/TestQuestion.png';

export const ContainerTestQuestion = styled.div`
    flex-direction: row;
    background-image: url(${ImgTestQuestion});
    width: 100%;
    background-position: center;
    background-size: cover;
    height: 100vh;
`;

export const TextQuestionIndex = styled.div`
    text-align: center;
    font-size: 20px;
    padding: 30px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonSeeAllResults = styled(Button)`
    border-radius: 12px;
    border: 2px solid var(--Blue-300);
    font-weight: bolder;
    color: var(--Blue-300);
    background-color: #ffffff;
    margin-right: 0;
    margin-left: auto;
    transform: translateY(-160%) translateX(-20%);
    font-size: 16px;
    display: block;
    width: 120px;
    height: 40px;
`;

export const ButtonNextQuestion = styled(Button)`
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
    font-size: 24px;
    font-weight: bolder;
    line-height: 30pt;
    /* display: -webkit-box;
    -webkit-line-clamp: 20;
    -webkit-box-orient: vertical;
    white-space: pre-line; */
    white-space: initial;
    display: block;
    white-space: pre-line;
`;

export const ContainerButton = styled(Col)`
    align-items: center;
    justify-content: center;
    display: grid;
`;
export const ButtonChoiceStlyed = styled.button`
    border-radius: 15px;
    font-size: 18px;
    font-weight: bolder;
    color: #000000;
    width: 343px;
    height: 60px;
    margin-top: 5px;
    letter-spacing: 1px;
    background-color: white;
    border-color: white;
    opacity: 0.8;
    position: relative;
    transform: translateY(350%);
    display: block;
    &:hover {
        color: black;
        border-color: white;
        cursor: pointer;
    }
`;

export const ButtonConfirmStartOver = styled(Button)`
    border-radius: 15px;
    font-weight: bolder;
    color: #ffffff;
    width: 10rem;
    height: 6vh;
    letter-spacing: 1px;
    margin-left: 5px;
    background-color: var(--Red-300);
`;

export const ButtonCancleStartOver = styled.div`
    font-weight: bolder;
    color: #3a8ce4;
    letter-spacing: 1px;
    margin-right: 60px;
    &:hover {
        cursor: pointer;
    }
`;

export const ContainerButtonStartOver = styled(Col)`
    align-items: center;
    justify-content: center;
    display: grid;
`;

export const IsLoadingSpinnerTestQuestion = styled.div`
    width: 12rem;
    height: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    bottom: 0 auto;
    transform: translateY(1000%);
`;

export const TextIsLoadingTestQuestion = styled.h4`
    font-weight: bolder;
`;
