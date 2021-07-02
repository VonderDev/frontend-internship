import { Progress } from 'antd';
import styled from 'styled-components';

export const ProgressBar = styled(Progress)`
    width: 80%;
    & .ant-progress-success-bg,
    .ant-progress-bg {
        background-color: var(--Blue-200);
        height: 17px !important;
    }
`;
