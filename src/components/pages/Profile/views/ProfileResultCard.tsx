import { Col } from 'antd';
import { MONTHS } from 'components/pages/Board/shared/months';
import { RowStyled, CardText, LinkMoreResult, TextTopic2, IconArrow, ResultCard, ResultImage } from 'components/pages/Profile/shared/Profile.styles';
import { useHistory } from 'react-router-dom';

interface CardComponentProps {
    profile: any;
}
const ProfileResultCard: React.FC<CardComponentProps> = ({ profile }) => {
    const history = useHistory();
    if (profile) {
        profile?.sort(function (a: any, b: any) {
            return new Date(b[0].created_at).getTime() - new Date(a[0].created_at).getTime();
        });

        //console.log('☞ [sort Board created latest] :', profile);
    }
    return (
        <>
            {profile?.slice(0, 1).map((item: any, index: any) => {
                const dateCreatedFilter = new Date(item[0].created_at);
                const dateFormat = dateCreatedFilter.getDate() + ' ' + MONTHS[dateCreatedFilter.getMonth()] + ' ' + dateCreatedFilter.getFullYear();
                console.log(dateFormat);
                return (
                    <ResultCard style={{ marginBottom: '10px' }} key={index} onClick={() => history.push('/result')}>
                        <RowStyled>
                            <Col span={10}>
                                <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                            </Col>
                            <Col span={12}>
                                <CardText style={{ transform: 'translateY(67%) translateX(5%)' }}>
                                    <RowStyled>ลักษณะเด่นของคุณ</RowStyled>

                                    <RowStyled>{dateFormat}</RowStyled>
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
