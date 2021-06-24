import { Link, useHistory } from 'react-router-dom';
import { API_Profile_Data } from '../apis/profile.api';
import { Form, List, Col, Row } from 'antd';
import { useEffect } from 'react';
import { IIconTextProfile, IListDataBoardHistory, IProfile } from '../shared/Profile.interface';
import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { useState } from 'react';
import {
    ContainerProfile,
    AlignCenter,
    AlignRight,
    ButtonSubmit,
    TextUserInfo1,
    TextUserInfo2,
    TextUsername,
    ResultCard,
    UserImage,
    TextTopic2,
    AlignLeft,
    ResultImage,
    CardText,
    IconArrow,
    ListProfile,
    ProfileListItem,
    HistoryImage,
    LinkMoreResult,
    HistoryText,
} from '../shared/Profile.styles';
import Container from 'components/Container/Container';
import React from 'react';

function Profile() {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    const history = useHistory();
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    const listData: Array<IListDataBoardHistory> = [];
    for (let i = 0; i < 6; i++) {
        listData.push({
            href: '/board',
            title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ${i}`,
            avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg',
            description: 'บทความ',
        });
    }

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
                    <AlignCenter>
                        <UserImage src={cred.pic} />
                        <TextUsername>{cred.username}</TextUsername>
                    </AlignCenter>
                    <Row>
                        <Col span={8}>
                            <TextUserInfo1>ชื่อ-นามสกุล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <AlignRight>
                                <TextUserInfo2>
                                    {cred.name} {cred.surname}
                                </TextUserInfo2>
                            </AlignRight>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <TextUserInfo1>อีเมล :</TextUserInfo1>
                        </Col>
                        <Col span={16}>
                            <AlignRight>
                                <TextUserInfo2>{cred.email}</TextUserInfo2>
                            </AlignRight>
                        </Col>
                    </Row>

                    <Link to="/editProfile">
                        <Form.Item>
                            <AlignCenter>
                                <ButtonSubmit>แก้ไขข้อมูลส่วนตัว</ButtonSubmit>
                            </AlignCenter>
                        </Form.Item>
                    </Link>
                    <TextTopic2>
                        ผลลัพธ์ของคุณ
                        <AlignRight>
                            <LinkMoreResult to="/profileresult">ดูเพิ่มเติม</LinkMoreResult>
                        </AlignRight>
                    </TextTopic2>
                    <AlignCenter>
                        <Link to="/result">
                            <ResultCard>
                                <Row>
                                    <Col span={8}>
                                        <AlignLeft>
                                            <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                                        </AlignLeft>
                                    </Col>
                                    <Col span={14}>
                                        <CardText>
                                            <Row>ลักษณะเด่นของคุณ</Row>
                                            <Row>วันที่ 15 มิ.ย. 2564</Row>
                                        </CardText>
                                    </Col>
                                    <Col span={2}>
                                        <IconArrow />
                                    </Col>
                                </Row>
                            </ResultCard>
                        </Link>
                    </AlignCenter>
                    <TextTopic2>
                        กระทู้ของคุณ
                        <AlignRight>
                            <LinkMoreResult to="/boardhistory">ดูเพิ่มเติม</LinkMoreResult>
                        </AlignRight>
                    </TextTopic2>
                    <AlignCenter>
                        <ListProfile
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
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
                        />
                    </AlignCenter>
                </ContainerProfile>
            </Container>
        </div>
    );
}

export default Profile;
