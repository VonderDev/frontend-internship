import styled from 'styled-components';
import { Button, Typography, Card, Row, Progress, Image } from 'antd';
import Chart from 'react-apexcharts';

const { Title } = Typography;

export const TextHeader = styled.div`
    text-align: center;
    font-size: 20px;
    padding: 30px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Gray-400);
`;

export const ButtonGoHome = styled(Button)`
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    transform: translateY(-150%);
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;
export const TextHeaderResult = styled.div`
    text-align: center;
    font-size: 22px;
    padding: 30px;
    font-weight: bolder;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ChartStyled = styled(Chart)`
    transform: translateY(-20%);
    width: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextBoxDescript = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Red-400);
`;
export const ButtonStart = styled(Button)`
    border-radius: 15px;
    font-weight: bolder;
    color: #7879f1;
    background-color: #ffffff;
    width: 5rem;
    height: 6vh;
    left: calc(100vh - 45vh);
`;

export const TextTitle = styled(Title)`
    justify-items: center;
    display: contents;
`;
export const ResultCard = styled(Card)`
    border-radius: 20px;
    border: solid 2px var(--Blue-300);
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-10%);
    width: 400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
`;

export const Boxpic = styled(Image)`
    border-radius: 20px;
    width: 80%;
    height: 100px;
`;

export const ImagePreview = styled(Image)`
    border-radius: 20px;
    width: 80%;
    height: 100px;
    :hover {
        cursor: pointer;
    }
`;

export const ContainerImagePreview = styled(Image.PreviewGroup)`
    & .ant-image {
        padding-left: 20px;
        position: absolute;
    }
`;

export const CategoryName = styled.h1`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 22px;
    font-weight: bolder;
    padding-top: 20px;
`;

export const SkillName = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bolder;
    padding-top: 20px;
    text-align: center;
`;
export const DesText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const DesBox = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    overflow-y: hidden;
`;
export const BodyCard = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20%;
`;

export const ContainerCharactorDetail = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 5%;
`;
export const Readmore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 90%;
    color: var(--Blue-300);
    border-radius: 30px;
    font-weight: bolder;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`;

export const TextBox = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    font-size: 16px;
`;

export const Resultpic = styled(Image)`
    width: 100%;
    height: 50vh;
    margin-top: 20px;
`;

export const ImgCharactorSummarize = styled(Image)`
    width: 80%;
    height: 50vh;
    transform: translateX(10%);
`;

export const ContainerCharactorSummarize = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
`;
export const BoardRecomment = styled(Card)`
    border-radius: 15px;
    margin-bottom: 50px;
`;

export const TextDateBoard = styled.div`
    padding-left: 18px;
`;

export const ContainerBoard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 4%;
`;

export const CardTag = styled(Card.Meta)`
    color: blue;
`;

export const RowDetailCard = styled(Row)`
    padding-top: 15px;
`;

export const ProgressScore = styled(Progress)``;

export const ContainerProgressScore = styled.div`
    padding-left: 20px;
    transform: translateY(-150%);
`;
export const TextNameSkill = styled.div`
    font-weight: bolder;
`;

//------------ STYLED RESULT INFO TAB ------------//
