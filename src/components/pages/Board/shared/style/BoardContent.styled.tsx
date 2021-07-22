import { Alert } from 'antd';
import styled from 'styled-components';
import profileImage from '../images/profile.png';

export const ContainerBaordContent = styled.div`
    padding-left: 30px;
    padding-top: 30px;
    padding-right: 30px;
`;

export const TextTitleContent = styled.div`
    font-size: 22px;
    font-weight: bolder;
`;

export const CategoryTag = styled.div`
    display: inline;
    color: var(--Gray-400);
`;

export const ImageOfContent = styled.img`
    border-radius: 12px;
    width: 100%;
    height: 55vh;
    margin-top: -15px;
    margin-bottom: 30px;
`;

export const ContentBody = styled.div`
    font-size: 16px;
    padding-bottom: 35px;
`;

export const ProfileImage = styled.div`
    background-image: url(${profileImage});
    width: 15%;
    height: 10vh;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-top: 15px;
`;

export const ContainerUserNameAndDate = styled.div`
    transform: translateY(-130%) translateX(18%);
`;

export const TopicTag = styled.span`
    font-size: 14px;
    color: var(--Gray-400);
    font-weight: bolder;
    padding-right: 10px;
`;

export const DateCreatedContent = styled.div`
    color: var(--Gray-400);
    font-size: 14px;
`;

export const AuthorName = styled.div`
    font-size: 18px;
    font-weight: bolder;
`;

export const BoxOfLikeAndComment = styled.div`
    padding-bottom: 5%;
    display: inline;
    position: relative;
    left: 18%;
    :hover {
        cursor: pointer;
    }
`;

export const LengthOfLikeAndComment = styled.span`
    font-size: 18px;
    color: #3a8ce4;
    font-weight: bolder;
    padding-left: 10px;
    padding-right: 36%;
`;

export const NotificationCreatedPostSuccess = styled(Alert)`
    border-radius: 30px;
    width: 35%;
    background-color: #c8eee2;
    border-color: #c8eee2;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    top: 10%;
    left: 32%;
    z-index: 9999;
    .ant-alert-message {
        color: #125d45;
    }
`;