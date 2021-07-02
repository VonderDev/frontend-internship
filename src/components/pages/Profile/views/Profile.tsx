import { useHistory } from 'react-router-dom';
import { ApiGetUserData } from '../apis/profile.api';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { IIconTextProfile, IListDataBoardHistory, IUser } from '../shared/Profile.interface';
import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { useState } from 'react';
import ProfileMascot from '../../Profile/images/ProfileMascot.png';
import {
    ContainerProfile,
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
} from '../shared/Profile.styles';
import Container from 'components/Container/Container';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Box, ButtonStyle } from 'shared/style/theme/component';

function Profile() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState<IUser>({ firstName: '', lastName: '', email: '', username: '' });
    async function getStatisticData() {
        const response = await ApiGetUserData();
        //Swr ใช้เป็น custom hook
        if (response) {
            setUserInfo((prevState) => ({
                ...prevState,
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                username: response.username,
            }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    const listData: Array<IListDataBoardHistory> = [];
    for (let i = 0; i < 3; i++) {
        listData.push({
            href: '/board',
            title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ${i}`,
            avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg',
            description: 'บทความ',
        });
    }
    const cardList = [
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ' },
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ' },
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ' },
    ];

    const IconText = ({ icon, text }: IIconTextProfile) => (
        <div>
            {React.createElement(icon)}
            {text}
        </div>
    );

    // const { data: userInfo, error } = useSWR('http://localhost:5000/user/find');
    // console.log('[User Data]:', userInfo);
    // console.log(error);
    // useEffect(() => {
    //     console.log(userInfo);
    // }, [userInfo]);

    return (
        <div>
            <Container header={{ left: 'back', title: 'ข้อมูลส่วนตัว', right: 'menu' }}>
                <Box style={{marginLeft: "20px", marginRight: "20px"}}justify="center" align="center" direction="column">
                    <UserImage src={ProfileMascot} />
                    <TextUsername>{userInfo.username}</TextUsername>
                        <RowStyled>
                            <Col span={8}>
                                <TextUserInfo1>ชื่อ-นามสกุล :</TextUserInfo1>
                            </Col>
                            <Col span={16}>
                                <TextUserInfo2>
                                    {userInfo.firstName} {userInfo.lastName}
                                </TextUserInfo2>
                            </Col>
                        </RowStyled>
                        <RowStyled>
                            <Col span={8}>
                                <TextUserInfo1>อีเมล :</TextUserInfo1>
                            </Col>
                            <Col span={16}>
                                <TextUserInfo2>{userInfo.email}</TextUserInfo2>
                            </Col>
                        </RowStyled>
                        <ButtonStyle style={{marginTop: "10px"}} typebutton="Large" pattern="Light" onClick={() => history.push('/editProfile')}>
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
                                <Col span={8}>
                                    <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                                </Col>
                                <Col span={14}>
                                    <CardText>
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
                        {cardList.map((item, index) => {
                            return (
                                <BoardCard
                                    key={index}
                                    onClick={() => {
                                        history.push('/Board');
                                    }}
                                >
                                    <RowStyled>
                                        <Col span={6}>
                                            <HistoryImage src={item.avatar} />
                                        </Col>
                                        <Col span={16}>
                                            <CardText>
                                                <Row>
                                                    <HistoryText>{item.title}</HistoryText>
                                                </Row>
                                                <Row>
                                                    <HistoryText>{item.description}</HistoryText>
                                                </Row>
                                            </CardText>
                                        </Col>
                                    </RowStyled>
                                </BoardCard>
                            );
                        })}
                </Box>
            </Container>
        </div>
    );
}
export default Profile;
