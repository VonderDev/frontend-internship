import { Space } from 'antd';
import styled from 'styled-components';
import { CardStyle } from 'shared/style/theme/component';

export const GridBox = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

export const ContainerImgCharactor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgCardCharactorList = styled(CardStyle)`
    padding: 0px;
    width: 130px;
    height: 100px;
    transition: all 0.2s ease;
    position: relative;
    & .ant-card-actions {
        border-top: none;
        background: none;
        box-shadow: inset 3px 3px 10px 0 #ffffff !important;
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
        box-shadow: inset 10px 10px 50px #fff !important;
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
    width: 130px;
    height: 100px;
    /* position: relative; */
    box-shadow: inset 0px 0px 20px 10px rgba(255, 255, 255, 0.6);
    z-index: 20;
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
    text-shadow: 1px 1px 10px white, 0 0 1em white, 0 0 0.2em white;
`;

export const BoardCardSpace = styled(Space)`
    padding-right: 20px;
    padding-left: 10px;
    padding-bottom: 25px;
`;

export const ListCategoryAndTag = styled.div`
    margin-top: 5px;
    font-size: 14px;
    font-weight: bolder;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    color: var(--Gray-400);
`;
