import { Progress, Tabs } from 'antd';
import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGoHome, ContainerProgressScore, TextNameSkill } from '../../shared/styles/ResultPage.styled';
import Chart from './Chart';

function ResultOverview() {
    const history = useHistory();
    const mockScore = require('../../mocks/result.json');
    const scoreList = mockScore.filter((data: { score: number }) => data.score);

    scoreList.sort(function (a: any, b: any): number {
        return b.score - a.score;
    });
    useEffect(() => {
        console.log('[Sort score]:', scoreList);
    }, []);

    return (
        <>
            <Container header={null}>
                <Chart />
                {scoreList.map((item: any, index: any) => {
                    return (
                        <ContainerProgressScore key={index}>
                            <TextNameSkill>{item.skill}</TextNameSkill>
                            <div>{item.skill_summarize}</div>
                            <Progress style={{ width: 400 }} strokeLinecap="square" percent={item.score} />
                        </ContainerProgressScore>
                    );
                })}
                <ButtonGoHome onClick={() => history.push('/result')}>กลับหน้าหลัก</ButtonGoHome>
            </Container>
        </>
    );
}

export default ResultOverview;
