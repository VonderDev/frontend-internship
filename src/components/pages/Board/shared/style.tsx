import { Card, Space, Typography } from 'antd';
import styled from 'styled-components';
import { FormOutlined, HeartFilled } from '@ant-design/icons';
import { CardStyle } from 'shared/style/theme/component';
import { Box } from 'shared/style/theme/component';

export const TextRecommendBoardTopic = styled.div`
    font-weight: bolder;
    font-size: var(--font-20);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--Gray-600);
    align-self: center;
    margin-bottom: 15px;
`;

export const ButtonSeeAllBoard = styled.div`
    color: var(--Blue-300);
    font-weight: bolder;
    font-size: var(--font-16);
    font-weight: bold;
    align-self: center;
    &:hover {
        cursor: pointer;
    }
`;

export const BoardTextInfo = styled.div`
    padding-right: 15px;
    margin-top: 5px;
`;

export const BoardCard = styled(Card)`
    margin-bottom: 10px;
    height: 88px;
    width: 100%;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 10px;
    & .ant-card-body {
        padding: 0px;
    }
`;

export const GridBox = styled.div`
    //display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
`;

export const NewCardStyle = styled(CardStyle)`
    padding: 0px;
    margin: 0px !important;
    margin-right: 10px !important;
    & .ant-card-actions {
        border-top: none;
        background: none;
    }
    & .ant-card-actions > li:not(:last-child) {
        border-right: none;
    }
    & .ant-card-meta-title {
        font-weight: bold;
    }
    & .ant-card-meta {
        padding: none;
    }
    & .ant-card-body {
        padding: 10px;
        padding-top: 10px;
    }
    & .ant-card-actions {
        padding: none;
        align-items: baseline;
    }
    & .ant-card-actions > li > span {
        font-size: 12px;
    }
`;

export const EllipsisText = styled.div`
    text-overflow: ellipsis; /* เพิ่ม ... จุดจุดจุดท้ายสุด */
    display: block;
    overflow: hidden;
    white-space: nowrap;
`;

export const SpaceCard = styled(Space)`
    //padding-right: 20px;
    //padding-left: 20px;
    margin-bottom: 10px;
    .ant-space-item {
        padding-left: 0px;
    }
`;

export const HistoryImage = styled.img`
    margin-right: 10px;
    width: 88px;
    height: 88px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateY(-1%);
    position: absolute;
`;

export const CoverImage = styled.img`
    width: 205px;
    height: 148px;
    object-fit: cover;
`;

export const HistoryText = styled.div`
    display: flex;
    padding-right: 5px;
    margin-top: 5px;
`;

export const CardTextData = styled.div`
    margin-top: 5px;
    font-size: 14px;
    font-weight: bolder;
    text-overflow: ellipsis; /* เพิ่ม ... จุดจุดจุดท้ายสุด */
    display: block;
    overflow: hidden;
    white-space: nowrap;
    color: var(--Gray-400);
`;

export const CommentIcon = styled(FormOutlined)`
    color: var(--Gray-100);
    transform: translateY(20%);
    margin-right: 5px;
`;

export const HeartIconCard = styled(HeartFilled)`
    color: var(--Gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px 8px;
    position: absolute;
    width: 48px;
    height: 20px;
    right: 10.46px;
    top: 11px;
    background: #ffffff;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
    border-radius: 100px;
`;

export const HeartText = styled(Typography)`
    color: var(--Gray-400);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 17px;
    position: absolute;
    width: 48px;
    height: 20px;
    right: 0px;
    top: 11px;
`;

export const SearchField = styled(Space)`
    display: flex;
    justify-content: center;
`;

export const HeartIcon = styled(HeartFilled)`
    color: var(--Gray-100);
    padding-top: 8px;
    padding-right: 5px;
`;

export const CustomBox = styled(Box)`
    margin-left: 100px;
`;
