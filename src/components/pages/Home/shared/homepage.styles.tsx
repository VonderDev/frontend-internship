import styled from 'styled-components';
import { Space, Button, Col, List } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export const SearchField = styled(Space)`
    margin-top: 20px;
    font-family: 'Kanit', sans-serif;
`;

export const TagFilter = styled.div`
    font-family: 'Kanit', sans-serif;
    border-color: black;
    font-weight: bolder;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonTagFilter = styled(Button)`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    color: black;
    opacity: 0.8;
    letter-spacing: 0.1rem;
    &:hover {
        letter-spacing: 0.2rem;
    }
`;

export const ImageTestPage = styled.div`
    height: 30vh;
    width: 500px;
    flex-direction: column;
    transition: 0.5s ease;
    margin: 0 auto;
    background-color: #7879f1;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #efefef;
        color: black;
        cursor: pointer;
        transition: transform 5s;
        transition: 500ms ease-in-out;
    }
`;

export const IconArrow = styled(RightOutlined)`
    color: #ffffff;
    display: flex;
    padding: 0px 6px;
    margin-left: auto;
    transform: translateY(-25px);
`;

export const TextOnImageTest = styled.div`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 25px;
`;
export const TextBoard = styled(Col)`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    flex-direction: column;
`;

export const ButtonSeeAllBoard = styled(Button)`
    background-color: #7879f1;
    color: white;
    height: 5vh;
    width: 100px;
    font-weight: 600;
    font-size: 15px;
    right: 100px;
    left: 200px;
`;

export const ListBoard = styled(List)`
    margin-left: 50px;
    font-weight: bolder;
    margin: 0 auto;
`;

export const ListItemBoard = styled(List.Item)`
    margin-left: 50px;
    font-family: 'Kanit', sans-serif;
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
