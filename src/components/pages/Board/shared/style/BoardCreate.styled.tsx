import { Button, Drawer, Form, Input, Modal, Radio, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';
import CircleChoiceImg from '../images/circleCategorie.png';
import CirCleSelectionImg from '../images/ChoiceSelection.png';

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
    padding-bottom: 20%;
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
    width: 400px;
    height: 7vh;
    position: absolute;
    bottom: 10px;
    left: 0px;
    right: 0px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        cursor: pointer;
    }
`;

export const TextTopicContent = styled.div`
    font-size: 16px;
    color: var(--Gray-400);
    margin-top: 8;
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
    width: 400px;
    height: 7vh;
    font-size: 16px;
    display: block;
    margin: auto;
    position: absolute;
    bottom: 10px;
    left: 0px;
    right: 0px;

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
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 70px;
`;

export const CountOfPageTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--Gray-400);
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 70px;
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
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    right: 10px;
`;

export const ContainerTag = styled(Radio.Group)`
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    right: 10px;
`;

export const ContentTypeButton = styled(Radio.Button)`
    .ant-radio-inner,
    .ant-radio-inner:after {
        border-radius: 0 !important;
    }
    border-radius: 12px !important;
    & .ant-radio-button {
        background-color: var(--Blue-000);
        border-radius: 12px !important;
        font-size: 14px;
        color: var(--Gray-500) !important;
        border-radius: var(--Blue-000);
    }
    &.ant-radio-button-wrapper:first-child {
        width: 168px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
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
    border-radius: 10px;

    .ant-select-selection-overflow {
        height: auto;
        min-height: 45px !important;
    }
    .ant-select-selector {
        border-radius: 12px !important;
    }
    & .ant-select-selection-item {
        background-color: #ffffff;
        border-radius: 6px;
        font-size: 16px;
        border-color: white;
        padding: 0;
        transform: translateX(10px);
    }

    & .ant-select-selection-item-content {
        background: var(--Blue-000);
        border-radius: 6px;
        width: 100%;
        text-align: center;
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

//---------------- CREATE MODAL STYLED -----------------//
export const ButtonExistModal = styled(Button)`
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    color: white;
    border-color: var(--Red-300);
    background-color: var(--Red-300);
    width: 295px;
    height: 51px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;
export const ButtonCancleModal = styled(Button)`
    font-weight: bolder;
    font-size: 16px;
    background-color: transparent;
    border: none;
    padding: 0px;
    color: var(--Blue-400);
    width: 65px;
    height: 19px;
    margin-top: 15px;
    transform: translateY(0%);
`;

export const ModalContainer = styled(Modal)`
    display: flex;
    justify-content: center;
    & .ant-modal-content {
        width: 343px;
        height: 249px;
        border-radius: 15px;
    }
    & .ant-modal-header {
        height: 89px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    }
    & .ant-modal-body {
        height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    & .ant-modal-footer {
        height: 130px;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`;

export const TextBodyModal = styled.div`
    font-weight: normal;
    font-size: 16px;
`;

export const TextTitleModal = styled.div`
    font-weight: bolder;
    font-size: 24px;
`;

export const CircleChoice = styled.div`
    background-image: url(${CircleChoiceImg});
    width: 20px;
    height: 20px;
`;

export const CircleSelection = styled.div`
    background-image: url(${CirCleSelectionImg});
    width: 20px;
    height: 20px;
`;

export const ButtonSelectedTag = styled.div`
    background-color: #daebfd;
    width: 130px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3a8ce4;
    font-size: 16px;
    /* display: inline-block; */
`;
