import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
    flex-direction: row;
    align-items: center;
`;

export const TextHeader = styled.h1`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    transform: translateY(50%);
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
    font-family: 'Kanit', sans-serif;
    font-size: 2rem;
    color: #7879f1;
    text-align: center;
    transform: translateY(7rem);
`;

export const TextDescription = styled.div`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 1rem;
    font-weight: bolder;
    transform: translateY(2rem);
`;

export const ButtonLoading = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: #7879f1;
    transform: translateY(5rem) translateX(13rem);
    width: 12rem;
    height: 6vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IsLoadingSpinner = styled.div`
    transform: translateY(5rem) translateX(13rem);
    width: 12rem;
    height: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextIsLoading = styled.h4`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
`;
