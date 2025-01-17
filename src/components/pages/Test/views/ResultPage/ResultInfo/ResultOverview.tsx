import { IResult } from 'components/pages/Test/shared/interface/Result.interfaces';
import { ProgressBar } from 'components/pages/Test/shared/styles/Result/ResultOverview.styled';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ErrorPage from 'shared/errorPage/ErrorPage';
import useSWR from 'swr';
import { ContainerProgressScore, TextNameSkill } from '../../../shared/styles/Result/ResultPage.styled';
import Chart from '../Chart';

function ResultOverview() {

    //-------------- CREATE MAX SCORE LIST USE SWR--------------//
    const [isData, isSetData] = useState<boolean>(false);
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    //----------------------- FETCHING DATA & GET PARAM  ----------------------- //
    const paramObjectId = useParams<{ id: string; index: string }>();
    const { data: resultData, error } = useSWR(token ? '/user/newResult' : '/guest/result');
    const { data: resultHistory, error: errorResultHistory } = useSWR(Object.keys(paramObjectId).length ? `/user/getResultByIndex/${paramObjectId?.id}/${paramObjectId?.index}` : null);
    const isLoading = !resultData && !error && !resultHistory && !errorResultHistory;

    useEffect(() => {
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
        if (resultHistory && !isData) {
            isSetData(true);
            const scoreList = resultHistory.filter((data: { score: number }) => data.score);
            //sort score
            scoreList.sort(function (a: any, b: any): number {
                return b.score - a.score;
            });
            setResultData(scoreList);
            console.log('[score List from useSWR]', scoreList);
        }
    }, [resultData, paramObjectId, resultHistory]);

    useEffect(() => {}, [result]);
    return (
        <>
            {error && errorResultHistory && <ErrorPage />}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <div>
                    <Chart />
                </div>
            )}
            <div style={{ transform: 'translateY(-5%)' }}>
                {result?.map((item: any, index: any) => {
                    return (
                        <ContainerProgressScore key={index}>
                            <TextNameSkill>{item?.skill}</TextNameSkill>
                            <div style={{ paddingBottom: '4px', fontSize: '16px', color: '#6E7282' }}>{item.skill_summarize}</div>
                            <ProgressBar style={{ width: '100%', paddingBottom: '24px' }} strokeLinecap="square" percent={item.score} />
                        </ContainerProgressScore>
                    );
                })}
            </div>
        </>
    );
}

export default ResultOverview;
