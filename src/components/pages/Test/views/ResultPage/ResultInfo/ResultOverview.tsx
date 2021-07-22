import { IResult } from 'components/pages/Test/shared/interface/Result.interfaces';
import { ButtonGoHomeInResult, ProgressBar } from 'components/pages/Test/shared/styles/Result/ResultOverview.styled';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, ButtonStyle } from 'shared/style/theme/component';
import useSWR from 'swr';
import { ContainerProgressScore, TextNameSkill } from '../../../shared/styles/Result/ResultPage.styled';
import Chart from '../Chart';

function ResultOverview() {
    const history = useHistory();

    //-------------- CREATE MAX SCORE LIST USE SWR--------------//
    const [isData, isSetData] = useState<boolean>(false);
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    const { data: resultData, error } = useSWR(token ? '/user/newResult' : '/guest/result');
    const isLoading = !resultData && !error;
    const paramObjectId = useParams<{ id: string; index: string }>();
    const { data: resultHistory, error: errorResultHistory } = useSWR(Object.keys(paramObjectId).length ? `/user/getResultByIndex/${paramObjectId?.id}/${paramObjectId?.index}` : null);

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

    useEffect(() => {
        console.log('Result of Progress bar', result);
    }, [result]);
    return (
        <>
            {isLoading ? <div>loading ...</div> : <div ><Chart /></div>}
            <div style={{transform: 'translateY(-5%)'}}>
            {result?.map((item: any, index: any) => {
                return (
                    <ContainerProgressScore key={index}>
                        <TextNameSkill>{item.skill}</TextNameSkill>
                        <div>{item.skill_summarize}</div>
                        <ProgressBar style={{ width: '100%' }} strokeLinecap="square" percent={item.score} />
                    </ContainerProgressScore>
                );
            })}
            </div>
            <Box justify='center' align='center' direction='row' style={{height: '50px' , marginBottom: '40px'}}>
            <ButtonStyle typebutton="Large"  sizebutton={85} style={{fontSize: '16px'}}
                onClick={() => {
                    history.push('/');
                    const tokenGuest = localStorage.getItem('tokenGuest');
                    if (tokenGuest) {
                        localStorage.removeItem('tokenGuest');
                    }
                }}
            >
                กลับหน้าหลัก
            </ButtonStyle>
            </Box>
        </>
    );
}

export default ResultOverview;
