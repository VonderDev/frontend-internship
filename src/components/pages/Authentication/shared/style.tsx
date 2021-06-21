import styled from 'styled-components';
import { Button, Image, Input } from 'antd';
import logo from '../../images/logo.png';

export const ButtonColor = styled(Button)`
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
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
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const LogoPage = styled(Image)`
    padding-top: 20px;
`;

export const FontText = styled.div`
    font-size: 18px;
    position: absolute;
    bottom: 2rem;
`;

export const FontTextHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 30px;
`;
