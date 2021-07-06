import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

//----------- CREATE CONTENT PAGE 1 -----------//
export const FormInputNameContent = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 80%;
    height: 45px;
    box-shadow: 0px 3px 6px #f1f1f1;
`;

export const FormInputContent = styled(Input)`
    color: grey;
    font-size: var(--font-16);
    border-radius: 15px;
    width: 80%;
    height: 220px;
    box-shadow: 0px 3px 6px #f1f1f1;
    padding-bottom: 30%;
`;

export const BoardForm = styled(Form.Item)`
    padding-top: 3%;
    & .ant-form-item-control {
        text-align: left;
    }
`;

export const ContainerBoardCreate = styled.div`
    padding-left: 5%;
`;

export const ButtonGoNextCreateContent = styled.button`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    transform: translateY(70%);
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;

export const ButtonSummitPost = styled.button`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Green-400);
    transform: translateY(160%);
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;

export const TextTopicContent = styled.div`
    font-size: 16px;
    color: var(--Gray-400);
`;

export const CountOfPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(70%);
`;
//----------- CREATE CONTENT PAGE 2 -----------//
