import React, { useState } from 'react';
import { IResultSummarize } from '../../shared/interface/Result.interfaces';
import { CategoryName, ContainerCharactorDetail, ContainerCharactorSummarize, DesText, ImgCharactorSummarize, Resultpic, SkillName, TextBox } from '../../shared/styles/ResultPage.styled';
import { Carousel } from 'antd';

interface ResultSummarizeProps {
    skill: string;
    img_charactor: string;
    skill_summarize: string;
}

const CharactorSummarize: React.FC<ResultSummarizeProps> = ({ skill, skill_summarize, img_charactor }) => {
    return (
        <>
            <ContainerCharactorSummarize>
                <ImgCharactorSummarize preview={false} src={img_charactor} />
                <SkillName>{skill}</SkillName>
                <TextBox>
                    <DesText>{skill_summarize}</DesText>
                </TextBox>
            </ContainerCharactorSummarize>
        </>
    );
};

export default CharactorSummarize;
