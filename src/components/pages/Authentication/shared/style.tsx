import styled from 'styled-components';
import { Button, Image, Input, Checkbox, Drawer, Typography, Form } from 'antd';

export const ButtonColor = styled(Button)`
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    width: 324px;
    height: 55px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BaseInput = styled(Input)`
    color: grey;
    font-size: var(--font-18);
    border-radius: 15px;
    width: 324px;
    height: 55px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const FormItem = styled(Form.Item)`
    & .ant-form-item-control {
    text-align: left;
    }
`;

export const LogoPage = styled(Image)`
    padding-top: 20px;
`;

export const LogoPageCenter = styled.div`
    text-align: center;
`;

export const FontText = styled.div`
    font-size: var(--font-18); 
`;

export const FontTextHeader = styled.div`
    font-size: var(--font-18);
    font-weight: bold;
    padding: 30px;
    text-align: center;
`;

export const MoveCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PrivacyContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 48px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #ebedf0;
  border-radius: 2px;
`;  

export const CheckboxPrivacy = styled(Checkbox)`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const TextboxPrivacy = styled.div`
    width: 80%;
    height: 75%;
    border-radius: 12px;
    overflow-y: scroll;
    background-color: #F3F3F3;
`;

export const TextAgree = styled(Typography)`
    font-size: var(--font-16);
    color: var(--Gray-400);
`;

export const TextAgreeColor = styled(Typography)`
    color: var(--Blue-300);
`;

export const TextRegister = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 20vh;
    font-size: var(--font-14);
    color: var(--Gray-400);
`;

export const TextDrawer = styled(Typography)`
    font-weight: bold;
`;

export const TextboxPrivacyCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DrawerRadius = styled(Drawer)`
    & .ant-drawer-content {
        border-radius: 12px 12px 0px 0px;
    }
    & .ant-drawer-title {
        font-weight: bold;
    }
    & .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;