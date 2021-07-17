import { Input } from 'antd';
import styled from 'styled-components';
import sendMessageIcon from '../images/Vector.png';
import profileImage from '../images/profile.png';

export const CommentInput = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 75%;
    height: 45px;
    box-shadow: 0px 3px 6px #f1f1f1;
    position: sticky;
    position: -webkit-sticky;
    top: 87%;
    left: 5%;
`;

export const IconSendMessage = styled.div`
    background-image: url(${sendMessageIcon});
    width: 6%;
    height: 5vh;
    background-size: cover;
    background-position: center;
    position: -webkit-sticky;
    top: 87.7%;
    right: 12%;
    position: sticky;
    float: right;
    :hover {
        cursor: pointer;
    }
`;

export const ProfileUserImage = styled.div`
    background-image: url(${profileImage});
    width: 10%;
    height: 7vh;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    position: relative;
    top: 18%;
`;

export const ProfileUserImageCommentList = styled.div`
    background-image: url(${profileImage});
    width: 10%;
    height: 7vh;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    position: relative;
    top: 5%;
`;

export const ContainerOfCommentList = styled.span`
    position: relative;
    left: 5%;
`;

export const CommentBody = styled.div`
    background-color: var(--Blue-000);
    border-radius: 12px;
    padding-left: 10px;
    padding-top: 10px;
    width: 60%;
    height: 9vh;
    transform: translateX(80px) translateY(-60%);
    font-size: 16px;
`;

export const CreatedDate = styled.div`
    padding-left: 10px;
    padding-top: 10px;
    width: 60%;
    height: 7vh;
    transform: translateX(80px) translateY(-90%);
    font-size: 12px;
`;

export const ButtonDelete = styled.div`
    position: relative;
    right: 15%;
    float: right;
    transform: translateY(-440%);
`;

export const Username = styled.div`
    font-weight: bolder;
`;
