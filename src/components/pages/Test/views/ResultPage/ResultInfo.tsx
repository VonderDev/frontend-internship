import { Tabs } from 'antd';
import Container from 'components/Container/Container';
import ResultOverview from './ResultOverview';
import ResultFeatures from './ResultFeatures';

function ResultInfo() {
    const { TabPane } = Tabs;

    function callback(key: any) {
        console.log(key);
    }
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
