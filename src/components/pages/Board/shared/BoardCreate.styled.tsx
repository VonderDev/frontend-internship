import { Button, Drawer, Form, Input, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

//------------------ CREATE CONTENT PAGE 1 ------------------//
export const FormInputNameContent = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 80%;
    height: 45px;
    box-shadow: 0px 3px 6px #f1f1f1;
`;

export const FormInputContent = styled(TextArea)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 80%;
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
    transform: translateY(103%);
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
export const ButtonSummitPost = styled.button`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Green-400);
    transform: translateY(740%);
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

export const CountOfPageCreateContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--Gray-400);
    bottom: 13%;
    left: 0;
    right: 0;
    position: absolute;
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

//------------------ CREATE DRAWER OF HASHTAG ------------------//
export const InputHashtagInDrawer = styled(Select)`
    & .ant-select-selection-overflow {
        height: 6vh;
    }
    & .ant-select-selector {
        border-radius: 12px !important;
    }
    & .ant-select-selection-selected-value {
        border-radius: 0px 8px 8px 0px;
        height: 53px;
    }
`;

export const OptionHashtag = styled(Select.Option)`
    color: whitesmoke;
    & .ant-select-dropdown .ant-select-dropdown-placement-bottomLeft {
        color: blue !important;
        box-shadow: red !important;
    }
    &:last-child{
        font-size: 30px !important;
    }
    &.ant-select-item-option-content {
        font-size: 30px !important;
    }
    background-color: red;
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
