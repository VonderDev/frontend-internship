import { IResult } from 'components/pages/Test/shared/interface/Result.interfaces';
import { ButtonGoHomeInResult, ProgressBar } from 'components/pages/Test/shared/styles/Result/ResultOverview.styled';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useSWR from 'swr';
import { ContainerProgressScore, TextNameSkill } from '../../../shared/styles/Result/ResultPage.styled';
import Chart from '../Chart';

function ResultOverview() {
    const history = useHistory();
    //-------------- CREATE MAX SCORE LIST USE SWR--------------//
    const [isData, isSetData] = useState<boolean>(false);
    const [result, setResultData] = useState<Array<IResult> | null>(null);

    const { data: resultData, error } = useSWR('http://18.139.108.242:5000/user/result');
    const isLoading = !resultData && !error;

    if (resultData && !isData) {
        isSetData(true);
        const scoreList = resultData.filter((data: { score: number }) => data.score);
        //sort score
        scoreList.sort(function (a: any, b: any): number {
            return b.score - a.score;
        });
        setResultData(scoreList);
        console.log('[score List from useSWR]', scoreList);
    }
    useEffect(() => {
        console.log('Result of Progress bar', result);
    }, [result]);
    return (
        <>
            {isLoading ? <div>loading ...</div> : <Chart />}

            {result?.map((item: any, index: any) => {
                return (
                    <ContainerProgressScore key={index}>
                        <TextNameSkill>{item.skill}</TextNameSkill>
                        <div>{item.skill_summarize}</div>
                        <ProgressBar style={{ width: 400 }} strokeLinecap="square" percent={item.score} />
                    </ContainerProgressScore>
                );
            })}
            <ButtonGoHomeInResult onClick={() => history.push('/')}>กลับหน้าหลัก</ButtonGoHomeInResult>
        </>
    );
}

export default ResultOverview;
