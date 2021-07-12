import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiGetNewestContent } from '../../apis/boardCreate.api';

function BoardContent() {
    const history = useHistory();
    const param = useParams<{ id: string }>();

    //--------------- FETCHING BOARD CONTENT USING SWR ---------------//
    async function getNewestContent() {
        const response = await ApiGetNewestContent();
        if (response) {
            console.log(response);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getNewestContent();
        console.log('paramm', param);
    }, []);
    return (
        <Container
            header={{
                title: 'กระทู้',
                right: 'menu',
                left: 'back',
            }}
        >
            <h1>{param.id} </h1>
        </Container>
    );
}

export default BoardContent;
