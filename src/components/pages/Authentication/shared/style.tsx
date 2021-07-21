import styled from 'styled-components';
import { Button, Image, Input } from 'antd';
import logo from "../../images/logo.png";

export const ButtonColor = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: #7879f1;
    /* transform: translateY(28rem) translateX(13rem); */
    width: 342px;
    height: 55px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const BaseInput = styled(Input)`
    color: grey;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
`;

export const BaseInputPassword = styled(Input)`
    color: grey;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
`;

export const BaseInputEmail = styled(Input)`
    color: grey;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
`;

export const LogoPage = styled(Image)`
    width: 98;
    height: 120;
    src: logo;
`;

export const FontText = styled.div`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    position: absolute;
    bottom: 2rem;
`;

export const FontTextHeader = styled.div`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    font-weight: bold;
    padding: 30px;
`;