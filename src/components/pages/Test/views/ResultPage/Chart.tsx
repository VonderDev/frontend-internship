import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { transalateToThai } from 'utils/transalator/transalator';
import { IResult } from '../../shared/interface/Result.interfaces';
import { ChartStyled, TextHeaderResult } from '../../shared/styles/Result/ResultPage.styled';

interface Chartprop {
    options: any;
    series?: any;
}

const Charts = () => {
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    const tokenGuest = localStorage.getItem('tokenGuest');
    const { data: resultData, error } = useSWR(token ? '/user/newResult' : '/guest/result');
    const isLoading = !resultData && !error;
    const paramObjectId = useParams<{ id: string; index: string }>();
    const { data: resultHistory, error: errorResultHistory } = useSWR(Object.keys(paramObjectId).length ? `/user/getResultByIndex/${paramObjectId?.id}/${paramObjectId?.index}` : null);
    //--------------- FETCHING SCORE & SKILL DATA USING SWR ---------------//
    const [score, setScore] = useState([]);
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        if (resultData && (token || tokenGuest)) {
            setScore(resultData.map((key: { score: any }) => key.score));
            setSkill(resultData.map((key: any) => transalateToThai(key.skill)));
        }
        if (resultHistory && paramObjectId) {
            console.log('Result History', resultHistory);
            setScore(resultData.map((key: { score: any }) => key.score));
            setSkill(resultData.map((key: any) => transalateToThai(key.skill)));
        }
    }, [resultData, paramObjectId, resultHistory]);

    return (
        <>
            <div>
                <TextHeaderResult>แผนภูมิพหุปัญญา</TextHeaderResult>
                <div style={{display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
                {isLoading ? (
                    <div>is loading ... </div>
                ) : (
                    <ChartStyled
                        options={{
                            chart: {
                                height: 350,
                                type: 'radar',
                                dropShadow: {
                                    enabled: true,
                                    blur: 1,
                                    left: 1,
                                    top: 1,
                                },
                            },
                            stroke: {
                                width: 2,
                            },
                            fill: {
                                opacity: 0.1,
                            },
                            markers: {
                                size: 5,
                                hover: {
                                    size: 10,
                                },
                            },
                            xaxis: {
                                categories: skill,
                            },
                        }}
                        series={[
                            {
                                name: 'Skill',
                                data: score,
                            },
                        ]}
                        type="radar"
                    />
                )}
                </div>
            </div>
        </>
    );
};

export default Charts;
