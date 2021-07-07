import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ChartStyled, TextHeaderResult } from '../../shared/styles/Result/ResultPage.styled';

interface Chartprop {
    options: any;
    series?: any;
}

const Charts = () => {
    //--------------- FETCHING SCORE & SKILL DATA USING SWR ---------------//
    const { data: resultData, error } = useSWR('http://localhost:5000/user/result');
    const isLoading = !resultData && !error;

    const [chartValue, setchartValue] = useState<Chartprop>({
        series: [
            {
                name: 'Skill',
                data: resultData?.map((key: { score: number }) => key.score),
            },
        ],
        options: {
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
                categories: resultData?.map((key: { skill: string }) => key.skill),
            },
        },
    });
    useEffect(() => {
        if (!isLoading) {
            setchartValue(chartValue);
        }
    }, [chartValue]);
    return (
        <>
            <div>
                <TextHeaderResult>แผนภูมิพหุปัญญา</TextHeaderResult>
                {isLoading ? <div>is loading </div> : <ChartStyled options={chartValue.options} series={chartValue.series} type="radar" />}
            </div>
        </>
    );
};

export default Charts;
