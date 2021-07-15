import { Input } from 'antd';
import styled from 'styled-components';
import sendMessageIcon from '../images/Vector.png';

export const CommentInput = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 75%;
    height: 45px;
    box-shadow: 0px 3px 6px #f1f1f1;
    position: relative;
    top: 80%;
    left: 5%;
`;

export const IconSendMessage = styled.div`
    background-image: url(${sendMessageIcon});
    width: 6%;
    height: 5vh;
    background-size: cover;
    background-position: center;
    position: relative;
    top: 80.5%;
    right: 10%;
    float: right;
    :hover {
        cursor: pointer;
    }
`;
