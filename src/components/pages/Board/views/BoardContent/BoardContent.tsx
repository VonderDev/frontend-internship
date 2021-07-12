import Container from "components/Container/Container";
import useSWR from "swr";
import { useHistory } from 'react-router';
import Typography from "shared/style/theme/Typograhy";
function BoardContent() {

    const { data, error } = useSWR('/user/content/get');
    const isLoading = !data && !error;
    console.log('Card Top10 Data : ', data);
    const history = useHistory();

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'กระทู้' }} >
            {/* {isLoading ? (
                <div>Loading.....</div>
            ) : (
                
            )} */}
        </Container>
    )
}

export default BoardContent;