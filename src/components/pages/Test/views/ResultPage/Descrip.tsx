import { useEffect, useState } from 'react';
import { BodyCard, Boxpic, ContainerImagePreview, DesBox, DesText, CategoryName, ImagePreview, Readmore, ResultCard, Resultpic, TextBox } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import { Col, Row, Image } from 'antd';
import { API_Get_ResultData } from '../../apis/Result.api';
import { IResult } from '../../shared/interface/Result.interfaces';
import BoardAdvice from './BoardAdvice';

const MockScore = require('../../mocks/result.json');
const chartScore = Object.keys(MockScore).map((key) => MockScore[key].score);
const Max = Math.max(...chartScore);
const Namemax = MockScore.filter((data: { score: number }) => data.score === Max);

const Descrip = () => {
    const history = useHistory();

    useEffect(() => {
        console.log('Maxscore: ', Max);
        console.log('Name: ', Namemax);
    }, []);

    const [detailCharactor, setDetailCharactor] = useState<IResult>({ categoryID: 0, skill: 0, score: 0, description: '', description_career: '', image_charactor: '', skill_summerize: '' });

    async function getResultData() {
        const response = await API_Get_ResultData();
        if (response) {
            console.log(response);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getResultData();
    }, [detailCharactor]);
    return (
        <>
            {Namemax.map((item: any, index: any) => {
                return (
                    <>
                        <ContainerImagePreview key={index}>
                            <ImagePreview
                                preview={false}
                                onClick={() => history.push({ pathname: '/charactordetail', search: `categoryID=${item.categoryID}` })}
                                width={200}
                                src={item.image_charactor}
                            >
                                <div>{item.skill}</div>
                            </ImagePreview>
                        </ContainerImagePreview>
                        {/* <BodyCard>
                            <Resultpic src={item.image_charactor} />
                            <Hname>{item.skill}</Hname>
                            <TextBox>
                                <DesText>{item.description}</DesText>
                            </TextBox>
                            <TextBox>
                                <DesText>{item.description_career}</DesText>
                            </TextBox>
                            <TextBox></TextBox>
                        </BodyCard>
                        <BoardAdvice /> */}
                    </>
                );
            })}
            {/* <BodyCard>
                <Resultpic src={detailCharactor.image_charactor} />
                <CategoryName>{detailCharactor.skill}</CategoryName>
                <TextBox>
                    <DesText>{detailCharactor.description}</DesText>
                </TextBox>
                <TextBox>
                    <DesText>{detailCharactor.description_career}</DesText>
                </TextBox>
                <TextBox></TextBox>
            </BodyCard>
            <BoardAdvice /> */}
        </>
    );
};

export default Descrip;
