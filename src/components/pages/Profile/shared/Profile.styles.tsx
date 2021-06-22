import { Button, Input, Card, Image, List } from 'antd';
import styled from 'styled-components';
import { RightOutlined, HeartOutlined, FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const AlignCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerProfile = styled.div`
    padding: 10px;
    max-width: 300px;
    margin: 0 auto;
`;

export const AlignRight = styled.div`
    float: right;
`;

export const AlignLeft = styled.div`
    float: left;
`;

export const ButtonSubmit = styled(Button)`
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    color: var(--Blue-400);
    border-color: var(--Blue-400);
    font-weight: bolder;
    width: 300px;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 0px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const FormInput = styled(Input)`
    border-radius: 10px;
    background-color: white;
    width: 300px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const TextTopic2 = styled.div`
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
export const HistoryText = styled.div`
font-weight: bolder;
font-size: 12px;
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

// export const HistoryCard = styled(Card)`
//     box-shadow: 0px 3px 6px #c7c7c7;
//     margin-top: 0px;
//     height: 110px;
//     width: 300px;
//     border-radius: 10px;
//     & .ant-card-body {
//         padding: 5px;
//     }
// `;

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
    width: 80px;
    border-radius: 90px;
`;

export const IconArrow = styled(RightOutlined)`
    color: #3a8ce4;
    width: 100px;
    transform: translateY(0%) translateX(120%);
`;
export const IconLove = styled(HeartOutlined)`
    width: 100px;
`;

export const IconWrite = styled(FormOutlined)`
    width: 100px;
`;

export const LinkResult = styled(Link)`
`;

export const LinkMoreResult = styled(Link)`
    font-size: 12px;
`;

// export const ProfileListBoard = styled(List)`
//     margin-left: 50px;
//     font-weight: bolder;
//     width: 300px;
// `;

// export const ProfileListItemBoard = styled(List.Item)`
//     margin-left: -50px;
//     & .ant-list-item-meta-title {
//         font-size: 12px;
//     }
//     & .ant-list-item-meta {
//         padding: 0px;
//         font-size: 12px;
//     }
//     & .ant-list-lg .ant-list-item {
//         padding: 16px 0px;
//     }
// `;

export const ListProfile = styled(List)`
    font-weight: bolder;
    margin: 0 auto;
`;

export const ProfileListItem = styled(List.Item)`
    margin-left: -10px;
    margin-bottom: 10px;
    height: 150px;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 20px;
    width: 350px;
`;
