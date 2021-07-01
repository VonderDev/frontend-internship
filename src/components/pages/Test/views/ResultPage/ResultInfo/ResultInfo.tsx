import { Tabs } from 'antd';
import Container from 'components/Container/Container';
import ResultOverview from '../ResultInfo/ResultOverview';
import ResultFeatures from './ResultFeatures';

function ResultInfo() {
    const { TabPane } = Tabs;
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