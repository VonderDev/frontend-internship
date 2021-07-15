import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import ProfileResultCard from './ProfileResultCard';

function ProfileResult() {
    const { data: profile, error: errorProfile } = useSWR('/user/profile');
    const isLoading = !errorProfile && !profile;
    useEffect(() => {
        if (profile) {
            console.log('[useEffect profile] :', profile);
        }
    }, [profile]);

    return (
        <Container header={{ left: 'back', title: 'ผลลัพธ์ของคุณ', right: 'menu' }}>
            {errorProfile && <div>error </div>}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    <ProfileResultCard profile={profile}/>
                </Box>
            )}
        </Container>
    );
}
export default ProfileResult;
