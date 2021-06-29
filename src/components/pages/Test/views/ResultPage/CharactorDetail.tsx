import { useEffect } from 'react';
import { CategoryName, ContainerCharactorDetail, DesText, Resultpic, TextBox } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import BoardAdvice from './BoardAdvice';
import Container from 'components/Container/Container';
import React from 'react';

const MockScore = require('../../mocks/result.json');

interface Props {
    description: string;
    description_career: string;
    skill: string;
    img_charactor: string;
}

const CharactorDetail: React.FC<Props> = ({ description, description_career, skill, img_charactor }) => {
    const history = useHistory();
    const idResult = window.location.search;
    const params = new URLSearchParams(idResult);
    const key = params.get('categoryID');
    const keyID = key ? parseInt(key) : 'Null';
    const resultInfo = MockScore.find((data: { categoryID: number }) => data.categoryID === keyID);

    useEffect(() => {
        console.log(window.location.href);
        console.log(window.location.search);
        console.log('ID :', key);
        console.log('Result :', resultInfo);
    }, []);

    return (
        <>
            <Container header={null}>
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
            </Container>
        </>
    );
};

export default CharactorDetail;
