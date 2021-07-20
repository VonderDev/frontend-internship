import { Card } from 'antd';
import styled from 'styled-components';
import { FormOutlined, HeartFilled } from '@ant-design/icons';

export const BoardList = styled(Card)`
    margin-bottom: 10px;
    height: 100px;
    width: 96%;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 10px;
    margin-left: 10px;
    & .ant-card-body {
        padding: 0px;
    }
`;

export const TextOverflowHide = styled.div`
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
`;

export const BoardImageOfContent = styled.img`
    margin-right: 10px;
    width: 90px;
    height: 100px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateY(-1%);
    position: absolute;
`;

export const BoardTextInfo = styled.div`
    padding-right: 15px;
    margin-top: 5px;
    font-size: 14px;
    padding-right: 10px;
    color: var(--Gray-400);
    display: inline;
`;

export const CommentIcon = styled(FormOutlined)`
    color: var(--Gray-100);
    transform: translateY(20%);
    margin-right: 5px;
`;
export const HeartIcon = styled(HeartFilled)`
    color: var(--Gray-100);
    transform: translateY(20%);
    margin-right: 5px;
`;

export const ContainerOfIcon = styled.div`
    justify-content: center;
    display: inline;
`;

export const ContainerOfBoardInfo = styled.div``;

export const ContainerOfIconAndText = styled.div`
    padding-top: 10px;
`;
