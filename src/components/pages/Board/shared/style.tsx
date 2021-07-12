import { Card, Col, Row, List, Space } from 'antd';
import styled from 'styled-components';
import { RightOutlined, FormOutlined , HeartFilled } from '@ant-design/icons';

export const TextRecommendBoardTopic = styled(Col)`
    font-weight: bolder;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ButtonSeeAllBoard = styled.div`
    color: var(--Blue-300);
    height: 5vh;
    width: 100px;
    font-weight: bolder;
    font-size: 15px;
    padding-top: 20px;
    display: flex;
    transform: translateX(280%);

    &:hover {
        cursor: pointer;
    }
`;

export const CardContainer = styled.div`
    /* overflow-x: scroll; */
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

export const RowStyled = styled(Row)`
    width: 100%;
`;

export const GridBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    overflow-x: scroll;
    ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
    }
`;

export const HistoryImage = styled.img`
    width: 88px;
    height: 88px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateY(-1%);
`;

export const CardText = styled.div`
    font-weight: bolder;
    font-size: 16px;
`;

export const HistoryText = styled.div`
    margin-top: 5px;
    font-size: 14px;
    font-weight: bolder;
    text-overflow: ellipsis; /* เพิ่ม ... จุดจุดจุดท้ายสุด */
    display: block;
    overflow: hidden;
    white-space: nowrap;
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

export const ListBoard = styled(List)`
    font-weight: bolder;
    margin: 0 auto;
`;

export const ListItemBoard = styled(List.Item)`
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 20px;
    height: 130px;
    width: 550px;
    & .ant-list-item-action {
        transform: translateY(-300%);
        padding-left: 135px;
    }
`;

export const SearchField = styled(Space)`
    display: flex;
    justify-content: center;
`;

export const ImgBoardList = styled.img`
    transform: translateX(-15%) translateY(-6%);
    border-radius: 15px;
    width: 120px;
    height: 130px;
`;