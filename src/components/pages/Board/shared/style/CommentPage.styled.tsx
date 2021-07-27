import { Input } from 'antd';
import styled from 'styled-components';
import sendMessageIcon from '../images/Vector.png';
import profileImage from '../images/AvatarStudent.png';
import QuestionImage from '../images/Question.png';
import CommentGrayImg from '../images/CommentGray.png';

export const CommentInput = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 80%;
    height: 45px;
    box-shadow: 0px 3px 6px #f1f1f1;
    position: absolute;
    margin-right: 10px;
    z-index: 20;

    /* position: sticky;
    position: -webkit-sticky; */
    /* top: 87%;
    left: 5%; */
`;

export const IconSendMessage = styled.div`
    background-image: url(${sendMessageIcon});
    width: 30px;
    height: 30px;
    margin-right: -10px;
    margin-left: -20px;
    background-size: cover;
    background-position: center;
    top: 7px;
    right: 14%;
    position: absolute;
    float: right;

    :hover {
        cursor: pointer;
    }
    /* @media (min-width: 460px) {
        margin-left: 20px;
    } */
`;

export const ProfileUserImage = styled.div`
    background-image: url(${profileImage});
    width: 60px;
    height: 60px;
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

export const ContainerOfCommentList = styled.div`
    position: relative;
    left: 5%;
    overflow-y: scroll;
    height: 78vh;
`;
export const TextNoCommentList = styled.div`
    font-size: 18px;
    color: var(--Gray-200);
    font-size: 18px;
    font-weight: bolder;
    //position: absolute;
    //top: 55%;
    //left: 30%;
`;

export const CommentBody = styled.div`
    background-color: var(--Blue-000);
    border-radius: 12px;
    padding-left: 10px;
    padding-top: 10px;
    width: 70%;
    height: 9vh;
    transform: translateX(70px) translateY(-60%);
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const CreatedDate = styled.div`
    padding-left: 10px;
    padding-top: 10px;
    width: 60%;
    height: 7vh;
    transform: translateX(70px) translateY(-90%);
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

export const ContainerOfInput = styled.div`
    position: relative;
    left: 5%;
`;

export const BoxOfCommentList = styled.div`
    height: 15vh;
`;

export const LoginText = styled.div`
    color: var(--Blue-200);
    font-size: 16px;
    transform: translateX(88%) translateY(45%);
    position: absolute;
    z-index: 100 !important;
    :hover {
        cursor: pointer;
    }
`;

export const QuestionImgae = styled.div`
    background-image: url(${QuestionImage});
    width: 26vh;
    height: 26vh;
    background-size: cover;
    background-position: center;
    //position: absolute;
    //top: 20%;
    //left: 30%;
`;

export const ContainerOfIconQuestionAndText = styled.div`
    width: 100%;
    height: 78vh;
`;

export const CommentGray = styled.div`
    background-image: url(${CommentGrayImg});
    width: 30px;
    height: 30px;
    margin-right: -10px;
    margin-left: -20px;
    background-size: cover;
    background-position: center;
    top: 7px;
    right: 14%;
    position: absolute;
    float: right;

    :hover {
        cursor: pointer;
    }
`;
