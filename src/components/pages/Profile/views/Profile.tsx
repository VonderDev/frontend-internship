import { useHistory } from 'react-router-dom';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import Container from 'components/Container/Container';
import useSWR from 'swr';
import { Box, ButtonStyle } from 'shared/style/theme/component';
import ProfileMascot from '../../Profile/images/ProfileMascot.png';
import {
    TextUserInfo1,
    TextUserInfo2,
    TextUsername,
    ResultCard,
    UserImage,
    TextTopic2,
    ResultImage,
    CardText,
    IconArrow,
    HistoryImage,
    LinkMoreResult,
    HistoryText,
    RowStyled,
    BoardCard,
    CommentIcon,
    HeartIcon,
} from '../shared/Profile.styles';

function Profile() {
    const history = useHistory();
    const cardList = [
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
    ];

    const { data, error } = useSWR('http://18.139.108.242:5000/user/find');
    const { data: boardData, error: boardError } = useSWR('http://18.139.108.242:5000/user/content/get');
    const isLoading = !boardData && !boardError;
    console.log('Profile Data', boardData);

    useEffect(() => {
        if (boardData) {
            console.log('[useEffect data username] :', boardData.username);
            console.log('[useEffect data email] :', boardData.email);
        }
    }, [boardData]);

    return (
        <Container header={{ left: 'back', title: 'ข้อมูลส่วนตัว', right: 'menu' }}>
            {error && <div>error </div>}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    <UserImage src={ProfileMascot} />
                    <TextUsername>{data.username}</TextUsername>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>ชื่อ-นามสกุล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>
                                {data.firstName} {data.lastName}
                            </TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>อีเมล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>{data.email}</TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <ButtonStyle style={{ marginTop: '10px' }} typebutton="Large" pattern="Light" onClick={() => history.push('/editProfile')}>
                        แก้ไขข้อมูลส่วนตัว
                    </ButtonStyle>
                    <RowStyled>
                        <Col span={16}>
                            <TextTopic2>ผลลัพธ์ของคุณ</TextTopic2>
                        </Col>
                        <Col span={8}>
                            <LinkMoreResult onClick={() => history.push('/profileresult')}>ดูเพิ่มเติม</LinkMoreResult>
                        </Col>
                    </RowStyled>
                    <ResultCard onClick={() => history.push('/result')}>
                        <RowStyled>
                            <Col span={10}>
                                <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                            </Col>
                            <Col span={12}>
                                <CardText style={{ transform: 'translateY(67%)' }}>
                                    <RowStyled>ลักษณะเด่นของคุณ</RowStyled>
                                    <RowStyled>วันที่ 15 มิ.ย. 2564</RowStyled>
                                </CardText>
                            </Col>
                            <Col span={2}>
                                <IconArrow />
                            </Col>
                        </RowStyled>
                    </ResultCard>
                    <RowStyled>
                        <Col span={16}>
                            <TextTopic2>กระทู้ของคุณ</TextTopic2>
                        </Col>
                        <Col span={8}>
                            <LinkMoreResult onClick={() => history.push('/boardhistory')}>ดูเพิ่มเติม</LinkMoreResult>
                        </Col>
                    </RowStyled>
                    {boardData.map((item: any, index: any) => {
                        return (
                            <BoardCard
                                key={index}
                                onClick={() => {
                                    history.push('/Board');
                                }}
                            >
                                <RowStyled>
                                    <Col span={7}>
                                        <HistoryImage src={item.avatar} />
                                    </Col>
                                    <Col span={17}>
                                        <CardText>
                                            <Row>
                                                <HistoryText>{item.title}</HistoryText>
                                            </Row>
                                            <Row>
                                                <HistoryText>{item.content_body}</HistoryText>
                                            </Row>
                                            <Row>
                                                <Col span={2}>
                                                    <CommentIcon />
                                                </Col>
                                                <Col span={10}>
                                                    <HistoryText>{data.username}</HistoryText>
                                                </Col>
                                                <Col span={8}>
                                                    <HistoryText>{item.created_at}</HistoryText>
                                                </Col>
                                                <Col span={2}>
                                                    <HeartIcon />
                                                </Col>
                                                <Col span={2}>
                                                    <HistoryText>12</HistoryText>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </Col>
                                </RowStyled>
                            </BoardCard>
                        );
                    })}
                </Box>
            )}
        </Container>
    );
}
export default Profile;