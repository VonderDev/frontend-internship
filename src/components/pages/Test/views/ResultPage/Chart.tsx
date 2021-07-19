import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ChartStyled, TextHeaderResult } from '../../shared/styles/Result/ResultPage.styled';

interface Chartprop {
    options: any;
    series?: any;
}

const Charts = () => {
    //--------------- FETCHING SCORE & SKILL DATA USING SWR ---------------//

    const { data: resultData, error } = useSWR('/user/newResult');
    const isLoading = !resultData && !error;
    const [score, setScore] = useState([]);
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        if (resultData) {
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
