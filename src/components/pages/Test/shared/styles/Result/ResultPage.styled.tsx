import styled from 'styled-components';
import { Button, Typography, Card, Row, Progress, Image, Tabs } from 'antd';
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

export const TextHeaderResult = styled.div`
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: none;
    padding-top: 20px;
    padding-left: 20px;
`;

export const ChartStyled = styled(Chart)`
    width: 120%;
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

export const SkillName = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bolder;
    padding-top: 20px;
    text-align: center;
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
`;

export const CardTag = styled(Card.Meta)`
    color: blue;
`;

export const RowDetailCard = styled(Row)`
    padding-top: 15px;
`;

export const ProgressScore = styled(Progress)``;

export const ContainerProgressScore = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
`;
export const TextNameSkill = styled.div`
    font-weight: bolder;
    padding-bottom: 4px;
    font-size: 16px;
`;

//------------ STYLED RESULT INFO TAB ------------//
export const TabsInfo = styled(Tabs)`
    & .ant-tabs-tab {
        font-size: 16px;
        font-weight: bolder;
    }
    & .ant-tabs-nav .ant-tabs-nav-wrap {
        padding-top: 3%;
        justify-content: center;
    }
    & .ant-tabs-nav .ant-tabs-tab {
        background-color: #ffffff;
        border-radius: 12px 12px !important;
        padding: 8px 60px;
        border: 1px solid #f0f0f0;
        margin: 0;
        letter-spacing: 1px;
        color: black;
        width: 180px;
        margin-left: 0px !important;
        display: flex;
        justify-content: center;
    }
    & .ant-tabs-nav .ant-tabs-tab-active {
        background-color: var(--Gray-500);
        height: 52px;
        display: flex;
        justify-content: center;
        border-radius: 12px 12px 12px 0px !important;
        letter-spacing: 1px;
        margin-left: 0px !important;
    }

    & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: white !important;
        font-weight: bolder;
        font-size: 16px;
    }
`;

//------------ STYLED RESULT FEATURE / CHARACTOR DETAIL ------------//
export const ImagePreview = styled.img`
    position: relative;
    object-fit: cover;
    border-radius: 12px;
    padding: 5px;
    margin-left: 10px;
    width: 25%;
    height: 95px;
    border: 3px solid var(--Silver-100);
    background: no-repeat;
    transform: translateX(10%) translateY(-16%);
    box-shadow: inset 10px 10px 50px #fff;
    :hover {
        cursor: pointer;
    }
`;

export const ContainerImagePreview = styled(Image.PreviewGroup)`
    & .ant-imgage {
        position: relative;
        display: inline-block;
        margin-left: 15% !important;
        overflow-x: scroll;
    }
`;

export const TextNameSkillResultFeature = styled.div`
    position: relative;
    font-size: 14px;
    font-weight: bolder;
    top: 33%;
    left: 32%;
    transform: translateX(-370%) translateY(320%);
`;

export const ContainerResultFeature = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const CategoryName = styled.h1`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 22px;
    font-weight: bolder;
    padding-top: 20px;
`;

export const TextBoxDescription = styled.div`
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    font-size: 16px;
`;

export const TextNameSkillInImg = styled.div`
    position: absolute;
    font-size: 14px;
    font-weight: bolder;
    margin-left: 100px;
    transform: translateX(100%) translateY(-150%);
    white-space: pre-wrap !important;
`;

export const ResultImgCharactorDetail = styled(Image)`
    width: 1000px;
    height: auto;
`;

export const ContainerCharactorDetail = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 5%;
`;

export const DescriptionText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonGoHomeInResultFeature = styled(Button)`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    transform: translateY(-20%);
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;
