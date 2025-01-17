import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import BoardCardComponent from 'components/pages/Board/views/Board/BoardCardComponent';
import ErrorPage from 'shared/errorPage/ErrorPage';

function BoardHistory() {
    const { data: profile, error: errorProfile } = useSWR('/user/profile');
    const isLoading = !errorProfile && !profile;
    useEffect(() => {
        if (profile) {
            console.log('[useEffect profile] :', profile);
        }
    }, [profile]);

    return (
        <Container header={{ left: 'back', title: 'กระทู้ของคุณ', right: 'menu' }}>
            {errorProfile && <ErrorPage />}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    <BoardCardComponent data={profile?.contents} />
                </Box>
            )}
        </Container>
    );
}
export default BoardHistory;
