import { CategoryName, ContainerCharactorDetail, DesText, Resultpic, TextBox } from '../../shared/styles/ResultPage.styled';
import BoardAdvice from './BoardAdvice';
import Container from 'components/Container/Container';
import React from 'react';

interface ResultProps {
    description: string;
    description_career: string;
    skill: string;
    img_charactor: string;
}

const CharactorDetail: React.FC<ResultProps> = ({ description, description_career, skill, img_charactor }) => {
    return (
        <>
            <Resultpic preview={false} src={img_charactor} />
            <ContainerCharactorDetail>
                <CategoryName>{skill}</CategoryName>
                <TextBox>
                    <DesText>{description}</DesText>
                </TextBox>
                <CategoryName>อาชีพที่เหมาะสม</CategoryName>
                <TextBox>{description_career}</TextBox>
            </ContainerCharactorDetail>
            <BoardAdvice />
        </>
    );
};

export default CharactorDetail;
