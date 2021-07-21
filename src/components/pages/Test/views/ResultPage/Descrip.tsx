import { useEffect, useState } from 'react';
import { BodyCard, Boxpic, DesBox, DesText, Hname, Readmore, ResultCard } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';

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
    return (
        <>
            <div>
                {Namemax.map((item: any, index: any) => {
                    return (
                        <ResultCard key={index}>
                            <BodyCard>
                                <Hname>
                                    {item.skill} : {item.score} คะแนน
                                </Hname>
                                <Boxpic>
                                    {' '}
                                    <h1>Character </h1>
                                </Boxpic>
                                <DesBox>
                                    <DesText>{item.description}</DesText>
                                </DesBox>
                                <Readmore>
                                    <p>อ่านเพิ่มเติม</p>
                                </Readmore>
                            </BodyCard>
                        </ResultCard>
                    );
                })}
            </div>
        </>
    );
};

export default Descrip;
