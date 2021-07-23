import { CategoryName, ContainerCharactorDetail, DescriptionText, ResultImgCharactorDetail, TextBoxDescription } from '../../../shared/styles/Result/ResultPage.styled';
import BoardAdvice from '../BoardAdvice';
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
            <ResultImgCharactorDetail preview={false} src={img_charactor} />
            <ContainerCharactorDetail>
                <CategoryName>{skill}</CategoryName>
                <TextBoxDescription>
                    <DescriptionText>{description}</DescriptionText>
                </TextBoxDescription>
                <CategoryName>อาชีพที่เหมาะสม</CategoryName>
                <TextBoxDescription>{description_career}</TextBoxDescription>
            </ContainerCharactorDetail>
            <BoardAdvice />
        </>
    );
};

export default CharactorDetail;
