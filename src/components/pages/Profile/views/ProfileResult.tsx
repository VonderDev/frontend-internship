import { Row, Col } from 'antd';
import Container from 'components/Container/Container';
import { useHistory } from 'react-router-dom';
import { Box } from 'shared/style/theme/component';
import { ResultImage, CardText, IconArrow, RowStyled, ResultCard } from '../shared/Profile.styles';

function ProfileResult() {
    const history = useHistory();

    const cardList = [
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 15 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 16 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 17 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 18 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
    ];

    return (
        <Container header={{ left: 'back', title: 'ผลลัพธ์ของคุณ', right: 'menu' }}>
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                {cardList.map((item, index) => {
                    return (
                        <ResultCard style={{marginBottom: "10px"}}
                            key={index}
                            onClick={() => {
                                history.push('/result');
                            }}
                        >
                            <RowStyled>
                                <Col span={10}>
                                        <ResultImage src={item.image} />
                                </Col>
                                <Col span={12}>
                                    <CardText style={{ transform: 'translateY(67%)' }}>
                                        <Row>{item.title}</Row>
                                        <Row>{item.date}</Row>
                                    </CardText>
                                </Col>
                                <Col span={2}>
                                    <IconArrow />
                                </Col>
                            </RowStyled>
                        </ResultCard>
                    );
                })}
            </Box>
        </Container>
    );
}
export default ProfileResult;
