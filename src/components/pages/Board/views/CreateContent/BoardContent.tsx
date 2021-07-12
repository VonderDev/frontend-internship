import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { ApiGetNewestContent } from '../../apis/boardCreate.api';

function BoardContent() {
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
    }, []);
    return (
        <Container
            header={{
                title: 'กระทู้',
                right: 'menu',
                left: 'back',
            }}
        >
            <h1> Board post success </h1>
        </Container>
    );
}

export default BoardContent;
