import { Tabs } from 'antd';
import Container from 'components/Container/Container';
import { TabsInfo } from 'components/pages/Test/shared/styles/Result/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'shared/style/theme/component';
import ResultOverview from '../ResultInfo/ResultOverview';
import ResultFeatures from './ResultFeatures';

function ResultInfo() {
    const { TabPane } = Tabs;
    const history = useHistory();
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
                    <Box justify="center" align="center" direction="row" style={{position:'sticky',bottom:'0px',backgroundColor:'white'}}>
                    {' '}
                <ButtonStyle
                    typebutton="Large"
                    sizebutton={85}
                    style={{ fontSize: '16px', fontWeight: 'bolder',margin:'2% 0px' }}
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
                </div>
            </Container>
        </>
    );
}

export default ResultInfo;
