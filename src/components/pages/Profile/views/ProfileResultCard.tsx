import { Col } from 'antd';
import { RowStyled, CardText, LinkMoreResult, TextTopic2, IconArrow, ResultCard, ResultImage } from 'components/pages/Profile/shared/Profile.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface CardComponentProps {
    profile: any;
}
const ProfileResultCard: React.FC<CardComponentProps> = ({ profile }) => {
    const history = useHistory();
    return (
        <>
            <RowStyled>
                <Col span={16}>
                    <TextTopic2>ผลลัพธ์ของคุณ</TextTopic2>
                </Col>
                <Col span={8}>
                    <LinkMoreResult onClick={() => history.push('/profileresult')}>ดูเพิ่มเติม</LinkMoreResult>
                </Col>
            </RowStyled>
            {profile?.results.slice(0,1).map((item: any, index: any) => {
                return (
                    <ResultCard key={index} onClick={() => history.push('/result')}>
                        <RowStyled>
                            <Col span={10}>
                                <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                            </Col>
                            <Col span={12}>
                                <CardText style={{ transform: 'translateY(67%) translateX(-10%)' }}>
                                    <RowStyled>ลักษณะเด่นของคุณ</RowStyled>
                                    <RowStyled>{item[0].created_at}</RowStyled>
                                </CardText>
                            </Col>
                            <Col span={2}>
                                <IconArrow />
                            </Col>
                        </RowStyled>
                    </ResultCard>
                );
            })}
        </>
    );
};
export default ProfileResultCard;
