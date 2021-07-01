import styled from 'styled-components';
import { Button, Carousel, Image } from 'antd';

export const ImageCharactorCarousel = styled.img`
    width: 100%;
    height: 90vh;
    :hover {
        cursor: pointer;
    }
`;

export const TextSkillName = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: bolder;
    bottom: 20%;
`;

export const TextSkillSummarize = styled.div`
    position: absolute;
    font-size: 18px;
    bottom: 15%;
`;

export const HeaderResultFeature = styled.div`
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 2%;
`;

export const ButtonSeeAllResult = styled(Button)`
    border-radius: 12px;
    border: 2px solid var(--Blue-400);
    color: var(--Blue-400);
    background-color: #ffffff;
    font-weight: bolder;
    bottom: 0;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 5px 8px 50px 20px #ffffff;
`;

export const ContainerResultSummarize = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerCarousel = styled(Carousel)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;
