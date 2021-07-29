import { Tabs } from 'antd';
import Container from 'components/Container/Container';
import { TabsInfo } from 'components/pages/Test/shared/styles/Result/ResultPage.styled';
import ResultOverview from '../ResultInfo/ResultOverview';
import ResultFeatures from './ResultFeatures';

function ResultInfo() {
    const { TabPane } = Tabs;
    return (
        <>
            <Container
                header={{
                    title: 'ผลลัพธ์ของคุณ',
                    right: 'menu',
                    left: 'back',
                }}
            >
                <div>
                    {' '}
                    <TabsInfo type="card">
                        <TabPane tab="ภาพรวม" key="1">
                            <ResultOverview />
                        </TabPane>
                        <TabPane tab="ลักษณะเด่น" key="2">
                            <ResultFeatures />
                        </TabPane>
                    </TabsInfo>
                </div>
            </Container>
        </>
    );
}

export default ResultInfo;
