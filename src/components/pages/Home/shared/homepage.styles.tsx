import styled from 'styled-components';
import { Space, Button, Col, List, Input, Row } from 'antd';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import gamePreviewImg from '../shared/images/gamepreview.png';

export const SearchField = styled(Space)`
    display: flex;
    justify-content: center;
`;

export const InputSearch = styled(Input)`
    border-radius: 10px;
    width: 320px;
    height: 40px;
    top: 20px;
`;

export const ButtonFilter = styled(Button)`
    border-radius: 10px;
    top: 20px;
    width: 40px;
    height: 40px;
`;
export const TagFilter = styled.div`
    border-color: black;
    font-weight: bolder;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonTagFilter = styled(Button)`
    font-weight: bolder;
    color: black;
    opacity: 0.8;
    letter-spacing: 0.1rem;
    &:hover {
        letter-spacing: 0.2rem;
    }
`;

export const ImageTestPage = styled.div`
    background-image: url(${gamePreviewImg});
    transition: 0.5s ease;
    margin-top: 40px;
    border-radius: 10px;
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* display: flex;
    justify-content: center;
    align-items: center; */

    /* &:hover {
        cursor: pointer;
    } */
`;

export const ButtonStartGame = styled(Button)`
    color: #ffffff;
    display: flex;
    background-color: #287fde;
    margin-left: auto;
    border-radius: 15px;
    font-weight: bolder;
    letter-spacing: 1px;
    justify-content: center;
    margin-right: 20px;
    width: 100px;
    height: 40px;
    align-items: center;
    font-size: 18px;
`;

export const ButtonReadOverviewTest = styled.div`
    color: #ffffff;
    position: absolute;
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: 18px;
    position: absolute;
    transform: translateY(-120%) translateX(10%);
    padding-left: 20px;
    &:hover {
        cursor: pointer;
    }
`;

export const TextTopicOnImageTest = styled.div`
    font-weight: bolder;
    color: #ffffff;
    font-size: 22px;
    padding-left: 30px;
    padding-top: 15px;
    margin-bottom: 140px;
`;
export const TextBoard = styled(Col)`
    font-weight: bolder;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    flex-direction: column;
`;

export const ButtonSeeAllBoard = styled.div`
    color: var(--Blue-300);
    height: 5vh;
    width: 100px;
    font-weight: bolder;
    font-size: 15px;
    padding-top: 25px;
    display: flex;
    transform: translateX(280%);

    &:hover {
        cursor: pointer;
    }
`;

export const ListBoard = styled(List)`
    font-weight: bolder;
    margin: 0 auto;
`;

export const ListItemBoard = styled(List.Item)`
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 20px;
`;

export const ButtonCreateBoard = styled(Button)`
    background-color: #252525;
    color: white;
    font-weight: bolder;
    font-size: 30px;
    position: fixed;
    padding-bottom: 50px;
    bottom: 40px;
    right: 150px;
    width: 60px;
    height: 50px;
`;
