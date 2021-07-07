import { Card, Col } from 'antd';
import styled from 'styled-components';

export const TextRecommendBoardTopic = styled(Col)`
    font-weight: bolder;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ButtonSeeAllBoard = styled.div`
    color: var(--Blue-300);
    height: 5vh;
    width: 100px;
    font-weight: bolder;
    font-size: 15px;
    padding-top: 20px;
    display: flex;
    transform: translateX(280%);

    &:hover {
        cursor: pointer;
    }
`;

export const ArticleCard = styled(Card)`

`;