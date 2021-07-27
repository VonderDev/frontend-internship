import styled from 'styled-components';
import { Image, Checkbox, Drawer, Typography, Form } from 'antd';

export const FormLogin = styled(Form)`
    width: 90%;
`;

export const FormItemTextValidate = styled(Form.Item)`
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
    border-radius: 2px;
`;

export const DrawerContainer = styled.div`
    position: relative;
    height: 120%;
    overflow: hidden;
    border-radius: 2px;
    z-index: 20 !important;
`;

export const CheckboxPrivacy = styled(Checkbox)`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const TextboxPrivacy = styled.div`
    height: 75%;
    border-radius: 12px;
    overflow-y: scroll;
    background-color: #f3f3f3;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
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
    & .ant-drawer-header {
        border-bottom: none;
    }
    & .ant-drawer-content {
        border-radius: 12px 12px 0px 0px;
    }
    & .ant-drawer-title {
        padding-top: 30px;
        font-size: var(--font-22);
        align-items: center;
        font-weight: bold;
    }
    & .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
    }
`;

export const DrawerFilter = styled(Drawer)`
    & .ant-drawer-header {
        border-bottom: none;
    }
    & .ant-drawer-content {
        border-radius: 12px 12px 0px 0px;
    }
    & .ant-drawer-title {
        padding-top: 30px;
        font-size: var(--font-22);
        align-items: center;
        font-weight: bold;
    }
    & .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
    }
`;
