import { ButtonGoHomeInResult, ProgressBar } from 'components/pages/Test/shared/styles/Result/ResultOverview.styled';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerProgressScore, TextNameSkill } from '../../../shared/styles/Result/ResultPage.styled';
import Chart from '../Chart';

function ResultOverview() {
    const history = useHistory();
    const mockScore = require('../../../mocks/result.json');
    const scoreList = mockScore.filter((data: { score: number }) => data.score);

    scoreList.sort(function (a: any, b: any): number {
        return b.score - a.score;
    });
    useEffect(() => {
        console.log('[Sort score]:', scoreList);
    }, []);

    return (
        <>
            <Chart />
            {scoreList.map((item: any, index: any) => {
                return (
                    <ContainerProgressScore key={index}>
                        <TextNameSkill>{item.skill}</TextNameSkill>
                        <div>{item.skill_summarize}</div>
                        <ProgressBar style={{ width: 400 /* height: 8px; */ }} strokeLinecap="square" percent={item.score} />
                    </ContainerProgressScore>
                );
            })}
            <ButtonGoHomeInResult onClick={() => history.push('/result')}>กลับหน้าหลัก</ButtonGoHomeInResult>
        </>
    );
}

export default ResultOverview;
