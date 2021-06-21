import { Button, Input, Card, Image, List } from 'antd';
import Layout from 'antd/lib/layout/layout';
import styled from 'styled-components';
import { RightOutlined, HeartOutlined, FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const MoveCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    padding: 10px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
`;

export const AlignRight = styled.div`
    float: right;
`;

export const AlignLeft = styled.div`
    float: left;
`;

export const ButtonSubmit = styled(Button)`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    color: #3a8ce4;
    border-color: #3a8ce4;
    font-weight: bolder;
    width: 300px;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 0px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const BgColor = styled(Layout)`
    background-color: white;
`;

export const FormInput = styled(Input)`
    font-family: 'Kanit', sans-serif;
    font-size: 15px;
    border-radius: 10px;
    background-color: white;
    width: 300px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const TextTopic = styled.div`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 30px;
    padding-bottom: 5px;
`;
export const TextTopic2 = styled.div`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 17px;
    margin-top: 15px;
    margin-bottom: 0px;
`;

export const TextUserInfo = styled.div`
    font-weight: bolder;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const TextUsername = styled.div`
    font-weight: bolder;
    font-size: 15px;
    margin-top: 10px;
    padding-bottom: 0px;
`;
export const CardText = styled.div`
    font-weight: bolder;
    font-size: 12px;
    transform: translateY(80%) translateX(12%);
`;

export const ResultCard = styled(Card)`
    box-shadow: 0px 3px 6px #c7c7c7;
    margin-top: 0px;
    height: 110px;
    width: 300px;
    border-radius: 10px;
    & .ant-card-body {
        padding: 5px;
    }
`;

export const HistoryCard = styled(Card)`
    box-shadow: 0px 3px 6px #c7c7c7;
    margin-top: 0px;
    height: 110px;
    width: 300px;
    border-radius: 10px;
    & .ant-card-body {
        padding: 5px;
    }
`;

export const UserImage = styled(Image)`
    width: 80px;
    border-radius: 90px;
`;

export const ResultImage = styled.img`
    width: 100px;
    border-radius: 90px;
    transform: translateY(-1%);
`;

export const HistoryImage = styled.img`
    width: 100px;
    border-radius: 90px;
    transform: translateY(-17%);
`;

export const IconArrow = styled(RightOutlined)`
    color: #3a8ce4;
    width: 100px;
    transform: translateY(0%) translateX(120%);
`;
export const IconLove = styled(HeartOutlined)`
    //color: #3a8ce4;
    width: 100px;
    //display: flex;
    transform: translateY(100) translateX(200);
`;

export const IconWrite = styled(FormOutlined)`
    //color: #3a8ce4;
    width: 100px;
    //display: flex;
    //transform: translateY(500%) translateX(100%);
`;

export const LinkResult = styled(Link)`
    margin: 0px;
    padding: 0px;
`;

export const ProfileListBoard = styled(List)`
    margin-left: 50px;
    font-weight: bolder;
    margin: 0 auto;
    width: 300px;
`;

export const ProfileListItemBoard = styled(List.Item)`
    margin-left: -20px;
    font-family: 'Kanit', sans-serif;
    font-size: 12px;
    & .ant-list-item-meta-title {
        font-size: 12px;
    }
    & .ant-list-item-meta {
        font-size: 12px;
        transform: translateY(0%) translateX(0%);
    }
`;
