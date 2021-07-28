import styled from 'styled-components';
import { Space, Button, Col, List, Input } from 'antd';
import gamePreviewImg from '../../shared/images/gamepreview.png';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import CreateContentImg from '../images/CreateContentIcon.png';

export const SearchField = styled(Space)`
    display: flex;
    justify-content: center;
`;

export const InputSearch = styled(Input)`
    border-radius: 10px;
    width: 350px;
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
    margin-top: 0;
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 22px;
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
    width: 20%;
    height: 40px;
    align-items: center;
    font-size: 18px;
    transform: translateY(-10px);
    margin-bottom: 10px;
`;

export const ButtonReadOverviewTest = styled.div`
    color: #ffffff;
    position: absolute;
    font-weight: bolder;
    letter-spacing: 1px;

    font-size: 17px;
    text-shadow: 0 0 6px #72bd90;
    position: absolute;
    transform: translateY(-120%) translateX(10%);
    padding-bottom: 15px;
    &:hover {
        cursor: pointer;
    }
`;

export const TextTopicOnImageTest = styled.div`
    font-weight: bolder;
    color: #ffffff;
    font-size: 23px;
    padding-left: 30px;
    padding-top: 15px;
    margin-bottom: 140px;
    /* text-shadow: 1px 1px 2px black, 0 0 25px #afd4ff, 0 0 5px white; */
    letter-spacing: 2px;
`;
export const TextBoardTopic = styled(Col)`
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
    position: relative;
    margin-left: auto;
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
    height: 130px;
    width: 550px;
    & .ant-list-item-action {
        transform: translateY(-300%);
        padding-left: 135px;
    }
`;

export const ButtonCreatePost = styled(Button)`
    background-color: var(--Blue-300);
    color: white;
    font-weight: bolder;
    font-size: 30px;
    position: sticky;
    padding-bottom: 50px;
    bottom: 40px;
    width: 60px;
    height: 50px;
    left: 85%;
`;

export const CreateContentIcon = styled.div`
    background-image: url(${CreateContentImg});

    position: sticky;
    padding-bottom: 50px;
    bottom: 40px;
    width: 85px;
    height: 75px;
    left: 80%;
    margin-right: 10px;
    z-index: 30;
    /* z-index: 100 !important; */
    :hover {
        cursor: pointer;
    }
`;

export const ImgBoardList = styled.img`
    transform: translateX(-15%) translateY(-6%);
    border-radius: 15px;
    width: 120px;
    height: 130px;
`;

export const IconReadMore = styled(QuestionCircleTwoTone)`
    transform: translateY(4px);
`;
