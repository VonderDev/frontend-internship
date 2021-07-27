import { Button, Progress } from 'antd';
import styled from 'styled-components';

export const ProgressBar = styled(Progress)`
    width: 80%;
    padding-bottom: 10px;
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
    width: 75%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;
