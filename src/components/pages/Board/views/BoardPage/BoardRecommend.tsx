import Container from "components/Container/Container";
import { useHistory } from 'react-router-dom';

const BoardRecommend = () => {

    const history = useHistory();
    const cardList = [
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
      ];

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'แนะนำสำหรับคุณ' }} >

        </Container>
    )
}

export default BoardRecommend;