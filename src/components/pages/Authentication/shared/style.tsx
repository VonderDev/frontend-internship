import styled from 'styled-components';
import { Button, Image, Input } from 'antd';

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
    width: 98;
    height: 120;
    padding-top: 20px;
`;

export const FontText = styled.div`
    font-size: 18px; 
`;

export const FontTextHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 30px;
`;

export const MoveCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MoveBottom = styled.div`
    width: 194px;
    height: 16px;
    left: 91px;
    top: 735px;
    font-size: 18px;
    position: absolute;
    /* text-align: center; */
`;