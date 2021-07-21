import { Space } from 'antd';
import styled from 'styled-components';
import { CardStyle } from 'shared/style/theme/component';

export const GridBox = styled.div`
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

export const ImgCardCharactorList = styled(CardStyle)`
    padding: 0px;
    width: 150px;
    height: 90px;
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

export const BoardCardRecommend = styled(CardStyle)`
    padding: 0px;
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

export const SpaceCharactorList = styled(Space)`
    padding-left: 20px;
`;

export const CoverImage = styled.img`
    width: 150px;
    height: 90px;
    box-shadow: inset 0px 0px 20px 10px rgba(255, 255, 255, 0.6);
`;

export const SearchField = styled(Space)`
    display: flex;
    justify-content: center;
`;

export const SkillNameOnImgCard = styled.div`
    transform: translateY(-160%);
    font-weight: bolder;
    text-align: center;
    border-radius: 20px;
    font-size: 16px;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
    /* box-shadow: inset 0 0 10px #ffffff; */
`;

export const BoardCardSpace = styled(Space)`
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 25px;
`;
