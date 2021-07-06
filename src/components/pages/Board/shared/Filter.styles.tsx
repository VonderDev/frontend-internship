import { Drawer, Input } from "antd";
import styled from "styled-components";



export const ButtonFilter = styled.div`
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
export const SearchField = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
export const InputSearch = styled(Input)`
    border-radius: 10px;
    width: 80%;
    margin-right: 5px;
    height: 40px;
`;

export const DrawerRadius = styled(Drawer)`
    & .ant-drawer-content {
        border-radius: 12px 12px 0px 0px;
    }
    & .ant-drawer-title {
        font-weight: bold;
    }
    & .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;