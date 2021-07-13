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
    const { data: profile, error: errorProfile } = useSWR('/user/profile');
    const isLoading = !errorProfile && !profile;
    console.log('[Profile from user/profile]', profile);

    useEffect(() => {
        if (profile) {
            console.log('[useEffect profile] :', profile);
        }
    }, [profile]);

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
                    <RowStyled>
                        <Col span={16}>
                            <TextTopic2>ผลลัพธ์ของคุณ</TextTopic2>
                        </Col>
                        <Col span={8}>
                            <LinkMoreResult onClick={() => history.push('/profileresult')}>ดูเพิ่มเติม</LinkMoreResult>
                        </Col>
                    </RowStyled>
                    {profile?.results.slice(0, 1).map((item: any, index: any) => {
                        return (
                            <ResultCard key={index} onClick={() => history.push('/result')}>
                                <RowStyled>
                                    <Col span={10}>
                                        <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                                    </Col>
                                    <Col span={12}>
                                        <CardText style={{ transform: 'translateY(12%)' }}>
                                            <RowStyled>ลักษณะเด่นของคุณ</RowStyled>
                                            <RowStyled>{item[0].created_at}</RowStyled>
                                        </CardText>
                                    </Col>
                                    <Col span={2}>
                                        <IconArrow />
                                    </Col>
                                </RowStyled>
                            </ResultCard>
                        );
                    })}
                    <RowStyled>
                        <Col span={16}>
                            <TextTopic2>กระทู้ของคุณ</TextTopic2>
                        </Col>
                        <Col span={8}>
                            <LinkMoreResult onClick={() => history.push('/boardhistory')}>ดูเพิ่มเติม</LinkMoreResult>
                        </Col>
                    </RowStyled>
                    {profile?.contents.slice(0, 3).map((item: any, index: any) => {
                        return (
                            <BoardCard
                                key={index}
                                onClick={() => {
                                    history.push('/Board');
                                }}
                            >
                                <RowStyled>
                                    <Col span={7}>
                                        <HistoryImage src={item.image} />
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
                                                    <HistoryText>{item.author_username}</HistoryText>
                                                </Col>
                                                <Col span={8}>
                                                    <HistoryText>{item.created_at}</HistoryText>
                                                </Col>
                                                <Col span={2}>
                                                    <HeartIcon />
                                                </Col>
                                                <Col span={2}>
                                                    <HistoryText>{item.likes}</HistoryText>
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
