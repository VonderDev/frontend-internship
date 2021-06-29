import { Tabs } from 'antd';
import Container from 'components/Container/Container';
import ResultOverview from './ResultOverview';
import ResultFeatures from './ResultFeatures';
import { useHistory } from 'react-router-dom';

function ResultInfo() {
    const { TabPane } = Tabs;
    const history = useHistory();

    function callback(key: any) {
        console.log(key);
    }

    const MockScore = require('../../mocks/result.json');
    const chartScore = Object.keys(MockScore).map((key) => MockScore[key].score);
    const Max = Math.max(...chartScore);
    const Namemax = MockScore.filter((data: { score: number }) => data.score === Max);
    return (
        <>
            <Container header={null}>
                <Tabs type="card">
                    <TabPane tab="ภาพรวม" key="1">
                        <ResultOverview />
                    </TabPane>
                    <TabPane tab="ลักษณะเด่น" key="2">
                        <ResultFeatures />
                    </TabPane>
                </Tabs>
            </Container>
        </>
    );
}

export default ResultInfo;
