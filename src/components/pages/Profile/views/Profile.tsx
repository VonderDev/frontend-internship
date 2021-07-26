import { useHistory } from 'react-router-dom';
import { Col } from 'antd';
import { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import useSWR from 'swr';
import { Box, ButtonStyle } from 'shared/style/theme/component';
import ProfileMascot from '../../Profile/images/ProfileMascot.png';
import { TextUserInfo1, TextUserInfo2, TextUsername, UserImage, RowStyled, LinkMoreResult, TextTopic2, NotFoundText } from '../shared/Profile.styles';
import ProfileBoardCard from './ProfileBoardCard';
import ProfileResultCard from './ProfileResultCard';

function Profile() {
    //Data from get profile data API-------------------------------------------------------------
    const [fetchProfileData, setFetchProfileData] = useState<any>();
    const { data, error } = useSWR('/user/profile');
    const isLoading = !error && !fetchProfileData;

    useEffect(() => {
        if (data) {
            setFetchProfileData(data);
            console.log('[useEffect profile] :', fetchProfileData);
        }
    }, [data, fetchProfileData]);

    const history = useHistory();
    return (
        <Container header={{ left: 'back', title: 'ข้อมูลส่วนตัว', right: 'menu' }}>
            {error && <div>error </div>}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    <UserImage src={ProfileMascot} />
                    <TextUsername>{fetchProfileData?.auth[0].username}</TextUsername>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>ชื่อ-นามสกุล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>
                                {fetchProfileData?.auth[0].firstName} {fetchProfileData?.auth[0].lastName}
                            </TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>อีเมล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>{fetchProfileData?.auth[0].email}</TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <ButtonStyle style={{ marginTop: '10px' }} typebutton="Large" pattern="Light" onClick={() => history.push('/editProfile')}>
                        แก้ไขข้อมูลส่วนตัว
                    </ButtonStyle>
                    <RowStyled>
                        <Col span={16}>
                            <TextTopic2>ผลลัพธ์ของคุณ</TextTopic2>
                        </Col>
                        <Col span={8}>{fetchProfileData?.results.length === 0 ? <div></div> : <LinkMoreResult onClick={() => history.push('/profileresult')}>ดูเพิ่มเติม</LinkMoreResult>}</Col>
                    </RowStyled>
                    {fetchProfileData?.results.length === 0 ? (
                        <NotFoundText>
                            คุณยังไม่มีผลลัพธ์
                            <br />
                            เมื่อคุณทดสอบพหุปัญญา ผลลัพธ์จะปรากฏที่นี่
                            <div style={{ color: 'var(--Blue-300)', fontWeight: 'bolder', marginTop: '10px' }} onClick={() => history.push('/test')}>
                                เล่นเกมทดสอบพหุปัญญา
                            </div>
                        </NotFoundText>
                    ) : (
                        <ProfileResultCard profile={fetchProfileData?.results} />
                    )}
                    <RowStyled>
                        <Col span={16}>
                            <TextTopic2>กระทู้ของคุณ</TextTopic2>
                        </Col>
                        <Col span={8}>{fetchProfileData?.contents.length === 0 ? <div></div> : <LinkMoreResult onClick={() => history.push('/boardhistory')}>ดูเพิ่มเติม</LinkMoreResult>}</Col>
                    </RowStyled>
                    {fetchProfileData?.contents.length === 0 ? (
                        <NotFoundText>
                            คุณยังไม่เคยสร้างกระทู้
                            <br />
                            เมื่อคุณสร้างกระทู้ กระทู้จะปรากฏที่นี่
                            <div style={{ color: 'var(--Blue-300)', fontWeight: 'bolder', marginTop: '10px' }} onClick={() => history.push('/boardcreate')}>
                                สร้างกระทู้แรก
                            </div>
                        </NotFoundText>
                    ) : (
                        <ProfileBoardCard data={fetchProfileData?.contents} />
                    )}
                </Box>
            )}
        </Container>
    );
}
export default Profile;
