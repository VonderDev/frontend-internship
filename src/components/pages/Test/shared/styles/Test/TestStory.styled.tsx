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
    background-color: white;
    border: 5px solid whitesmoke;
    /* background: radial-gradient(ellipse 50% 50px, tranparent, white 20%, beige); */
    width: fit-content;
    max-width: 400px;
    min-width: 300px;
    height: 100px;
    padding: 20px;
    font-size: 20px;
    color: var(--Gray-300);
    border-radius: 50%;
    box-shadow: 0px 3px 80px #ffffff;
    opacity: 0.8;
    transform: translateY(250%);
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
