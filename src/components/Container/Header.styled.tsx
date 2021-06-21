import styled from 'styled-components';
import { Row, Col } from 'antd';

export const RowHeader = styled(Row)`
    margin-top: 10px;
    width: 100%;
    height: 80;
    top: 0;
    display: flex;
    align-items: center;
    background-color: white;
`;

export const TextHeader = styled.div`
    width: 100%;
    height: 36px;
    color: var(--Gray-700);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackHeader = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow:  0 0 2px #474545;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;