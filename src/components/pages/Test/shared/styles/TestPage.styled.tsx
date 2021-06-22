import styled from 'styled-components';
import { Button } from 'antd';
import TestOverview from '../images/TestOverview.png';

export const Containers = styled.div`
    flex-direction: row;
    background-image: url(${TestOverview});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
`;

export const TextHeader = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    padding-top: 100%;
    /* transform: translateY(150%); */
`;

export const BoxAnimation = styled.div`
    background-color: #dfdfff;
    height: 40vh;
    width: 500px;
    transition: 0.5s ease;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 30px;
`;

export const TextInBoxAnimation = styled.div`
    font-size: 2rem;
    color: #7879f1;
    text-align: center;
    transform: translateY(7rem);
`;

export const TextDescription = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: bolder;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const ButtonLoading = styled(Button)`
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;

export const IsLoadingSpinner = styled.div`
    width: 12rem;
    height: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const TextIsLoading = styled.h4`
    font-weight: bolder;
`;

export const ButtonBack = styled(Button)`
    border-radius: 10px;
    width: 40px;
    height: 40px;
    transform: translateX(20%) translateY(30%);
`;
