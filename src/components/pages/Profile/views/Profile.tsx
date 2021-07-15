import { useHistory } from 'react-router-dom';
import { Col } from 'antd';
import { useEffect } from 'react';
import Container from 'components/Container/Container';
import useSWR from 'swr';
import { Box, ButtonStyle } from 'shared/style/theme/component';
import ProfileMascot from '../../Profile/images/ProfileMascot.png';
import { TextUserInfo1, TextUserInfo2, TextUsername, UserImage, RowStyled } from '../shared/Profile.styles';
import ProfileBoardCard from './ProfileBoardCard';
import ProfileResultCard from './ProfileResultCard';

function Profile() {
    
    //Data from get profile data API-------------------------------------------------------------
    const { data: profile, error: errorProfile } = useSWR('/user/profile');
    const isLoading = !errorProfile && !profile;
    useEffect(() => {
        if (profile) {
            console.log('[useEffect profile] :', profile);
        }
    }, [profile]);

    const history = useHistory();
    return (
        <Container header={{ left: 'back', title: 'ข้อมูลส่วนตัว', right: 'menu' }}>
            {errorProfile && <div>error </div>}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    <UserImage src={ProfileMascot} />
                    <TextUsername>{profile?.auth[0].username}</TextUsername>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>ชื่อ-นามสกุล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>
                                {profile?.auth[0].firstName} {profile?.auth[0].lastName}
                            </TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>อีเมล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>{profile?.auth[0].email}</TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <ButtonStyle style={{ marginTop: '10px' }} typebutton="Large" pattern="Light" onClick={() => history.push('/editProfile')}>
                        แก้ไขข้อมูลส่วนตัว
                    </ButtonStyle>
                    <ProfileResultCard profile={profile} />
                    <ProfileBoardCard profile={profile} />
                </Box>
            )}
        </Container>
    );
}
export default Profile;
