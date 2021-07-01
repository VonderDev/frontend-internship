import { useHistory } from 'react-router-dom';
import { API_USER_Data } from '../apis/profile.api';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { IIconTextProfile, IListDataBoardHistory, IUser } from '../shared/Profile.interface';
import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { useState } from 'react';
import ProfileMascot from '../../Profile/images/ProfileMascot.png'
import {
    ContainerProfile,
    ButtonSubmit,
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

function Profile() {
    const [cred, setCred] = useState<IUser>({ firstName: '', lastName: '', email: '', username: '' });
    const history = useHistory();
    async function getStatisticData() {
        const response = await API_USER_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState, firstName: response.firstName, lastName: response.lastName, email: response.email, username: response.username }));
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
    return (
        <div>
            <Container header={{ left: 'back', children: 'ข้อมูลส่วนตัว', right: 'menu' }}>
                <ContainerProfile>
                    <UserImage src={ProfileMascot}/>
                    <TextUsername>{cred.username}</TextUsername>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>ชื่อ-นามสกุล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>
                                {cred.firstName} {cred.lastName}
                            </TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <RowStyled>
                        <Col span={8}>
                            <TextUserInfo1>อีเมล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <TextUserInfo2>{cred.email}</TextUserInfo2>
                        </Col>
                    </RowStyled>
                    <ButtonSubmit onClick={() => history.push('/editProfile')}>แก้ไขข้อมูลส่วนตัว</ButtonSubmit>
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
                    {/* <ListProfile
                        itemLayout="vertical"
                        size="large"
                        dataSource={listData}
                        renderItem={(item: any) => (
                            <ProfileListItem
                                key={item.title}
                                actions={[
                                    <IconText icon={FormOutlined} text=" Lookmaii" key="list-vertical-star-o" />,
                                    <IconText icon={CalendarOutlined} text=" 11 มิถุนายน 2564" key="list-vertical-like-o" />,
                                    <IconText icon={HeartFilled} text=" 12" key="list-vertical-message" />,
                                ]}
                            >
                                <HistoryText onClick={() => history.push('/board')}>
                                    <List.Item.Meta avatar={<HistoryImage src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
                                </HistoryText>
                            </ProfileListItem>
                        )}
                    /> */}
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
                </ContainerProfile>
            </Container>
        </div>
    );
}
export default Profile;
