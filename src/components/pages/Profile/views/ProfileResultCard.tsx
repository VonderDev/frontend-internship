import { Col } from 'antd';
import { RowStyled, CardText, IconArrow, ResultCard, ResultImage } from 'components/pages/Profile/shared/Profile.styles';
import { useHistory } from 'react-router-dom';
import { dateFormat } from 'utils/Date/DateFormat';

interface CardComponentProps {
    profile: any;
}
const ProfileResultCard: React.FC<CardComponentProps> = ({ profile }) => {
    const history = useHistory();
    if (profile) {
        profile?.sort(function (a: any, b: any) {
            return new Date(b[0].created_at).getTime() - new Date(a[0].created_at).getTime();
        });
    }
    return (
        <>
            {profile?.slice(0, 1).map((item: any, index: any) => {
                return (
                    <ResultCard style={{ marginBottom: '10px' }} key={index} onClick={() => history.push('/result')}>
                        <RowStyled>
                            <Col span={10}>
                                <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                            </Col>
                            <Col span={12}>
                                <CardText style={{ transform: 'translateY(67%) translateX(5%)' }}>
                                    <RowStyled>ลักษณะเด่นของคุณ</RowStyled>

                                    <RowStyled>{dateFormat(item[0]?.created_at)}</RowStyled>
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
