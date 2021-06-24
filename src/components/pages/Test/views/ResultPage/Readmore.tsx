import { useEffect, useState } from 'react';
import { BodyCard, Boxpic, DesText, Hname, Readmore, ResultCard, Resultpic, TextBox, TextBoxDescript } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import BoardAdvice from './BoardAdvice';
import Container from 'components/Container/Container';

const MockScore = require('../../mocks/result.json');

const ReadMore = () => {
    const history = useHistory();
    const idResult = window.location.search;
    const params = new URLSearchParams(idResult);
    const key = params.get('categoryID');
    const keyID = key ? parseInt(key) : 'Null';
    const resultDes = MockScore.find((data: { categoryID: number }) => data.categoryID === keyID);

    useEffect(() => {
        console.log(window.location.href);
        console.log(window.location.search);
        console.log('ID :', key);
        console.log('Result :', resultDes);
    }, []);

    return (
        <>
            <Container header={{ left: 'back', children: 'ผลลัพธ์', right: 'save' }}>
                <BodyCard>
                    <Hname>{resultDes.skill}</Hname>
                    <Resultpic src={resultDes.image_charactor} />

                    <TextBox>
                        <DesText>{resultDes.description}</DesText>
                    </TextBox>
                    <TextBox>
                        <DesText>{resultDes.description_career}</DesText>
                    </TextBox>
                </BodyCard>
                <BoardAdvice />
            </Container>
        </>
    );
};

export default ReadMore;
