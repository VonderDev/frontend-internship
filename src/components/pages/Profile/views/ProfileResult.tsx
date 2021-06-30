import { Row, Col } from 'antd';
import Container from 'components/Container/Container';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IIconTextProfile } from '../shared/Profile.interface';
import { ContainerProfile, ResultCardHistory, AlignLeft, ResultImage, CardText, IconArrow } from '../shared/Profile.styles';

function ProfileResult() {
    const history = useHistory();

    const cardList = [
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 15 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 16 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 17 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' },
        { title: 'ลักษณะเด่นของคุณ', date: 'วันที่ 18 มิ.ย. 2564', image: 'https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png' }
    ];

    const IconText = ({ icon, text }: IIconTextProfile) => (
        <div>
            {React.createElement(icon)}
            {text}
        </div>
    );

    return (
        <Container header={{ left: 'back', children: 'ผลลัพธ์ของคุณ', right: 'menu' }}>
            <ContainerProfile>
                    {cardList.map((item, index) => {
                        return (
                            <ResultCardHistory
                                key={index}
                                onClick={() => {
                                    history.push('/result');
                                }}
                            >
                                <Row>
                                    <Col span={8}>
                                        <AlignLeft>
                                            <ResultImage src={item.image} />
                                        </AlignLeft>
                                    </Col>
                                    <Col span={14}>
                                        <CardText>
                                            <Row>{item.title}</Row>
                                            <Row>{item.date}</Row>
                                        </CardText>
                                    </Col>
                                    <Col span={2}>
                                        <IconArrow />
                                    </Col>
                                </Row>
                            </ResultCardHistory>
                        );
                    })}
            </ContainerProfile>
        </Container>
    );
}
export default ProfileResult;
