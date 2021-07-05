import { Button, Progress } from 'antd';
import styled from 'styled-components';

export const ProgressBar = styled(Progress)`
    width: 80%;
    & .ant-progress-success-bg,
    .ant-progress-bg {
        background-color: var(--Blue-200);
        height: 17px !important;
    }
`;

export const ButtonGoHomeInResult = styled(Button)`
    border-radius: 12px;
    font-weight: bolder;
    color: white;
    background-color: var(--Blue-400);
    transform: translateY(-90%);
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;
