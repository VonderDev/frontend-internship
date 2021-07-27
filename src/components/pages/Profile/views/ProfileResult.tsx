import { Col } from 'antd';
import Container from 'components/Container/Container';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import { dateFormat } from 'utils/Date/DateFormat';
import { RowStyled, ResultImage, CardText, IconArrow, ResultCard } from '../shared/Profile.styles';

function ProfileResult() {
    const { data: profile, error: errorProfile } = useSWR('/user/profile');
    const isLoading = !errorProfile && !profile;
    const history = useHistory();

    if (profile?.results) {
        profile?.results?.sort(function (a: any, b: any) {
            return new Date(a[0].created_at).getTime() - new Date(b[0].created_at).getTime();
        });

        console.log('☞ [sort Board created latest] :', profile);
    }

    const profileAllResult = useMemo(() => {
        return (
            <>
                {profile?.results?.map((item: any, index: any) => {
                    return (
                        <ResultCard style={{ marginBottom: '10px' }} key={index} onClick={() => history.push(`/result/${profile.auth[0]._id}/${index}`)}>
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
    }, [profile?.results]);

    return (
        <Container header={{ left: 'back', title: 'ประวัติการทำแบบทดสอบ', right: 'menu' }}>
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    {profileAllResult}
                </Box>
            )}
        </Container>
    );
}
export default ProfileResult;
