import { Row } from 'antd';
import styled from 'styled-components';
import multipleInterlligences from '../../shared/images/multipleInterlligences.png';

export const TextTopicTestOverview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bolder;
`;

export const ImgMultipleInterlligences = styled.div`
    background-image: url(${multipleInterlligences});
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    background-size: cover;
    width: 350px;
    height: 350px;
`;

export const ParagraphDescription = styled(Row)`
    font-size: 16px;
    display: inline-block;
    padding-left: 10px;
    padding-top: 10px;
`;

export const TextCategoryName = styled.div`
    font-size: 16px;
    display: inline-block;
    padding-top: 10px;
    font-weight: bolder;
`;
