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
    height: 100px;

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
    height: 100px;
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
    text-shadow: 2px 2px 4px #ffffff;
`;
