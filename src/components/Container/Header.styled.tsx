import styled, { css }  from 'styled-components';
import { Row, Col } from 'antd';


export const RowHeader = styled(Row)`
    width: 100%;
    height: 8%;
    top: 0;
    display: flex;
    align-items: center;
    background-color: var(--White);
`;

export const TextHeader = styled.div`
    width: 100%;
    height: 36px;
    color: var(--Gray-400);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackHeader = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow:  0 3px 6px #e0e0e0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const LeftDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    align-items: center;
    cursor: pointer;
`;
export const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    align-items: center;
    cursor: pointer;
`;
