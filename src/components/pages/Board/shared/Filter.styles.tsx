import { Drawer, Input, Tag } from 'antd';
import CheckableTag from 'antd/lib/tag/CheckableTag';
import styled, { css } from 'styled-components';

export const ButtonFilter = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 3px 6px #e0e0e0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ButtonUseFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--Blue-400);
    color: white;
    width: 159px;
    height: 51px;
    border-radius: 12px;
    padding: 16px 120px;
`;
export const SearchField = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
export const TagBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 5px;
    margin-bottom: 5px;
`;
export const Topic = styled.div`
    font-size: 18px;
    font-weight: bold;
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
        flex-grow: 1;
        padding: 24px;
        overflow: auto;
        font-size: 14px;
        line-height: 1.5715;
        word-wrap: break-word;
    }
`;
export const CustomTag = styled(Tag)<{ active: 'active' | '' }>`
    font-size: 16px;
    width: 107px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #f2f2f5;
    border: none;
    ${({ active }) => {
        if (active === 'active') {
            return css`
                background-color: #daebfd;
                color: #3a8ce4;
            `;
        }
    }}
`;
export const CustomCheckableTag = styled(CheckableTag)`
    font-size: 16px;
    color: #6e7282;
    width: 107px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #f2f2f5 !important;
    border: none;
    &.ant-tag-checkable-checked {
        background-color: #daebfd !important;
        color: #3a8ce4 !important;
    }
    &.ant-tag-checkable {
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
    }
    &.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
        color: #6e7282;
    }
`;
