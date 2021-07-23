import styled from 'styled-components';
import BgTestStory from '../../images/TestStory.png';

export const ContainerTestStoryPage = styled.div`
    flex-direction: row;
    background-image: url(${BgTestStory});
    width: 100%;
    background-position: center;
    background-size: cover;
    height: 100vh;
    &:hover {
        cursor: pointer;
    }
`;

export const TextStory = styled.div`
    background: radial-gradient(60% 60% at 50% 50%, rgba(255, 255, 255, 0.8) 63.54%, rgba(255, 255, 255, 0) 85.42%);
    width: fit-content;
    padding: 0 10%;
    max-width: 600px;
    min-width: 500px;
    height: 120px;
    font-size: 20px;
    color: var(--Gray-600);
    opacity: 0.8;
    transform: translateY(200%);
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    align-items: center;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: 370px){
        font-size: 14px;
        max-width: 320px;
        min-width: 150px;
        transform: translateY(130%);
    }
    @media(max-width: 500px){
        font-size: 18px;
        max-width: 320px;
        min-width: 150px;
        transform: translateY(150%);
    }
`;
