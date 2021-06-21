import styled from 'styled-components';
import { Button, Typography, Card } from 'antd';

const { Title } = Typography;

export const ButtonHome = styled(Button)`
    border-radius: 0 25px 25px 0;
    color: #ffffff;
    background-color: #7879f1;
    width: 5rem;
    height: 7vh;
    left: 0;
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
    border: solid 2px #7879f1;
    margin: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* &.ant-card-body{
        display: flex;
        align-items: center;
        justify-content: center;
    } */
`;
export const Boxpic = styled.div`
    border-radius: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd6d2;
    width: 50%;
    height: 150px;
`;
export const Hname = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;
export const DesText = styled.p`
    margin: 0 50px 0 50px;
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
`;
export const Readmore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 90%;
    background-color: #ffffff;
    opacity: 1;
    color: #3e3eee;
    border-radius: 30px;
`;
export const TextBox = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%
`;

export const Resultpic = styled.div`
    border-radius: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd6d2;
    width: 60%;
    height: 300px;
`;