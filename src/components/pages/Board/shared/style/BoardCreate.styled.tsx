import { Button, Drawer, Form, Input, Radio, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

//------------------ CREATE CONTENT PAGE 1 ------------------//
export const FormInputNameContent = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 90%;
    height: 45px;
    box-shadow: 0px 3px 6px #f1f1f1;
`;

export const FormInputContent = styled(TextArea)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 90%;
    height: 220px;
    box-shadow: 0px 3px 6px #f1f1f1;
    padding-bottom: 30%;
`;

export const CreateContentForm = styled(Form.Item)`
    padding-top: 3%;
    & .ant-form-item-control {
        text-align: left;
    }
`;

export const ContainerBoardCreate = styled.div`
    padding-left: 5%;
`;

export const ButtonGoNextCreateContent = styled(Button)`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    transform: translateY(120%);
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`;

export const TextTopicContent = styled.div`
    font-size: 16px;
    color: var(--Gray-400);
`;

export const UploadImage = styled(Upload)`
    margin-top: 10px;
    margin-bottom: 10px;
    & .ant-upload {
        border-color: var(--Blue-400) !important;
        border-radius: 15px;
        height: 13vh;
    }
`;

export const TextContent = styled(TextArea)`
    border-radius: 12;
`;

//------------------ CREATE CONTENT PAGE 2 ------------------//
export const ButtonSummitPost = styled(Button)`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Green-400);
    transform: translateY(830%);
    margin-left: auto;
    margin-right: auto;
    width: 73%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`;

export const CountOfPageCreateContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--Gray-400);
    bottom: 13%;
    left: 0;
    right: 0;
    position: fixed;
`;

export const ButtonOfCategory = styled(Button)`
    font-size: 14px;
    color: var(--Gray-500);
    width: 30%;
    height: 6vh;
    border-radius: 12px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    right: 10px;
    &:hover {
        cursor: pointer;
        background-color: var(--Blue-000);
        border-color: #ffffff;
        color: black;
    }
`;

export const ContainerContentType = styled(Radio.Group)`
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    right: 10px;
`;

export const ContentTypeButton = styled(Radio.Button)`
    .ant-radio-inner,
    .ant-radio-inner:after {
        border-radius: 0 !important;
    }
    .ant-radio-inner:after {
        border: none !important;
    }
    border-radius: 12px !important;
    & .ant-radio-button-wrapper::first-child {
        border-color: white !important;
        border-radius: 12px !important;
        width: 100px;
    }
    & .ant-radio-button {
        background-color: var(--Blue-000);
        border-radius: 12px !important;
        font-size: 14px;
        color: var(--Gray-500) !important;

        /* border-radius: 12px !important; */
    }
`;
export const ButtonBackToFirstPage = styled(Button)`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 3px 6px #f5f5f5;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

//------------------ CREATE DRAWER OF HASHTAG ------------------//
export const InputHashtagInDrawer = styled(Select)`
    font-size: 16px;
    padding-top: 15px;

    .ant-select-selection-overflow {
        height: 45px;
    }
    .ant-select-selector {
        border-radius: 12px !important;
        background-color: pink;
    }

    &.ant-select-item {
        color: blue !important;
        font-size: 30px !important;
    }
`;

export const OptionHashtag = styled(Select.Option)`
    color: whitesmoke;
    font-size: 30px !important;
    & .ant-select-dropdown-placement-bottomLeft {
        color: blue !important;
        box-shadow: red !important;
    }
    &.ant-select-item-option-selected {
        color: blue !important;
    }
    &.ant-select-item {
        color: blue !important;
        font-size: 30px !important;
    }
    &.ant-select-item-option-content {
        color: blue !important;
        font-size: 30px;
    }
`;

export const OptionalTagName = styled.div`
    font-size: 16px;
    color: var(--Gray-600);
    padding-top: 30px;
`;

export const DrawerOfHashtag = styled(Drawer)`
    & .ant-drawer-content {
        border-radius: 12px 12px 0px 0px;
    }
    & .ant-drawer-title {
        font-weight: bold;
    }
    & .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const ButtonUseHashtags = styled(Button)`
    background-color: var(--Blue-400);
    color: white;
    width: 30%;
    height: 7vh;
    font-weight: bolder;
    border-radius: 12px;
    left: 70%;
    top: 80%;
    font-size: 16px;
`;

export const DrawerContainer = styled.div`
    position: relative;
    height: 100%;
    padding-left: 5%;
    overflow: hidden;
`;
