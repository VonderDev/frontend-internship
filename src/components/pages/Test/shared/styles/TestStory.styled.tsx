import styled from 'styled-components';
import BgTestStory from '../images/TestStory.png';

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
    width: 300px;
    height: 100px;
    font-size: 20px;
    color:var(--Gray-300);
    border-radius: 50%;
    box-shadow: 0px 3px 30px #ffffff;
    opacity: 0.7;
    transform: translateY(180%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-weight: bolder;

`
