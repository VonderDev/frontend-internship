import { useEffect } from 'react';
import { CategoryName, ContainerCharactorDetail, DesText, Resultpic, TextBox } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import BoardAdvice from './BoardAdvice';
import Container from 'components/Container/Container';

const MockScore = require('../../mocks/result.json');

const CharactorDetail = () => {
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
            <Container header={null}>
                <Resultpic preview={false} src={resultDes.image_charactor} />
                <ContainerCharactorDetail>
                    <CategoryName>{resultDes.skill}</CategoryName>
                    <TextBox>
                        <DesText>{resultDes.description}</DesText>
                    </TextBox>
                    <CategoryName>อาชีพที่เหมาะสม</CategoryName>

                    <TextBox>
                        <DesText>{resultDes.description_career}</DesText>
                    </TextBox>
                </ContainerCharactorDetail>
                <BoardAdvice />
            </Container>
        </>
    );
};

export default CharactorDetail;
