import { useEffect, useState } from 'react';
import useSWR from 'swr';
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
    //--------------- FETCHING SCORE & SKILL DATA USING SWR ---------------//
    const [score, setScore] = useState([]);
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        if (resultData && (token || tokenGuest)) {
            console.log('Result', resultData);
            setScore(resultData.map((key: { score: any }) => key.score));
            setSkill(resultData.map((key: any) => key.skill));
        }
    }, [resultData]);

    return (
        <>
            <div>
                <TextHeaderResult>แผนภูมิพหุปัญญา</TextHeaderResult>
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
        </>
    );
};

export default Charts;
