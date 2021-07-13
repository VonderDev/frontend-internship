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
