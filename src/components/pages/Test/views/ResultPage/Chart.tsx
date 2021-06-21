import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

interface Chartprop {
    options: any;
    series?: any
}

const Charts = () => {
  const MockScore = require('../../mocks/result.json')
  const chartScore = MockScore.map((key: { score: any; }) => key.score)
  const chartSkill = Object.keys(MockScore).map(key => MockScore[key].skill)

    const [chartValue, setchartValue] = useState<Chartprop>({
        series:[
            {
               name: "Skill",
               data: chartScore
            }
         ],
         options :{
                chart: {
                  height: 350,
                  type: "radar",
                  dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                  }
                },
                stroke: {
                  width: 2
                },
                fill: {
                  opacity: 0.1
                },
                markers: {
                    size: 5,
                    hover: {
                      size: 10
                    }
                  },
                xaxis: {
                  categories: chartSkill
                }
        }           
    });

    useEffect(() => {
        console.log(chartValue.options)
        console.log(chartValue.series)
        console.log(MockScore )
    }, [])

    return (
        <>
        <div>
            <Chart
            options = { chartValue.options } 
            series = { chartValue.series }
            type ="radar"
            />
        </div>
        </>
    );
};

export default Charts