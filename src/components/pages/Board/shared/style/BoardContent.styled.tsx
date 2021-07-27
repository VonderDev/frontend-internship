import { Alert } from 'antd';
import styled from 'styled-components';
import profileImage from '../images/AvatarStudent.png';
import IconLikeUnSuccessImg from '../images/IconLikeUnsuccess.png';
import IconLikeSuccessImg from '../images/IconLikeSuccess.png';
import CommentIconImg from '../images/IconCommentUnsuccuess.png';

export const ContainerBaordContent = styled.div`
    padding-left: 16px;
    padding-top: 16px;
    padding-right: 16px;
`;

export const TextTitleContent = styled.div`
    font-size: 22px;
    font-weight: bolder;
`;

export const CategoryTag = styled.div`
    display: inline;
    color: var(--Gray-400);
    padding-right: 5px;
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
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-right: 10px;
`;

export const ContainerUserNameAndDate = styled.div``;

export const TopicTag = styled.span`
    font-size: 14px;
    color: var(--Gray-400);
    font-weight: bolder;
    padding-right: 10px;
`;

export const DateCreatedContent = styled.div`
    color: var(--Gray-400);
    font-size: 12px;
`;

export const AuthorName = styled.div`
    font-size: 16px;
    font-weight: bolder;
`;

export const BoxOfLikeAndComment = styled.div`
    padding-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    //position: relative;
    /* left: 18%;
    :hover {
        cursor: pointer;
    } */
`;

export const LengthOfLikeAndComment = styled.span`
    font-size: 18px;
    color: #3a8ce4;
    font-weight: bolder;
    padding-left: 10px;
    padding-right: 36%;
`;

export const LengthOfLikeAndCommentSuccess = styled.span`
    font-size: 18px;
    color: var(--Red-300);
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

export const IconLikeUnSuccess = styled.div`
    background-image: url(${IconLikeUnSuccessImg});
    width: 57px;
    height: 24px;
`;
export const IconLikeSuccess = styled.div`
    background-image: url(${IconLikeSuccessImg});
    width: 57px;
    height: 24px;
`;

export const IconComment = styled.div`
    background-image: url(${CommentIconImg});
    width: 52px;
    height: 24px;
`;
