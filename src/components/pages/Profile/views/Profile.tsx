import { Link, useHistory } from 'react-router-dom';
import { API_Profile_Data } from '../apis/profile.api';
import { Form, List } from 'antd';
import { useEffect } from 'react';
import { IIconTextProfile, IListDataProfile, IProfile } from '../shared/Profile.interface';
import { useState } from 'react';
import {
    Container,
    MoveCenter,
    AlignRight,
    ButtonSubmit,
    BgColor,
    TextUserInfo,
    TextTopic,
    TextUsername,
    ResultCard,
    UserImage,
    TextTopic2,
    AlignLeft,
    ResultImage,
    CardText,
    IconArrow,
    LinkResult,
    HistoryCard,
    IconLove,
    IconWrite,
    ProfileListBoard,
    ProfileListItemBoard,
    HistoryImage,
} from '../shared/Profile.styles';
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

    const listData: Array<IListDataProfile> = [];
    for (let i = 1; i < 2; i++) {
        listData.push({
            href: '/board',
            title: 'แนะนำหนังสือสำหรับคนอยากไปสายวิศวะ',
            avatar: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/59064493_437047506858059_6394542383404417024_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aMf0eSHrFroAX87NAZJ&tn=CeGl5CLqXgfyZu7t&_nc_ht=scontent.fbkk12-1.fna&oh=2b1b5b5642904a40a58edd5a57f17a7e&oe=60CB2D93',
            description: 'บทความ',
        });
    }

    const IconText = ({ icon, text }: IIconTextProfile) => React.createElement(icon);
    return (
        <div>
            <BgColor>
                <Container>
                    <MoveCenter>
                        <TextTopic>ข้อมูลส่วนตัว</TextTopic>
                        <UserImage src={cred.pic} />
                        <TextUsername>{cred.username}</TextUsername>
                    </MoveCenter>
                    <TextUserInfo>
                        ชื่อ-นามสกุล :
                        <AlignRight>
                            {cred.name} {cred.surname}
                        </AlignRight>
                    </TextUserInfo>
                    <TextUserInfo>
                        อีเมล : <AlignRight>{cred.email}</AlignRight>
                    </TextUserInfo>
                    <Link to="/editProfile">
                        <Form.Item>
                            <MoveCenter>
                                <ButtonSubmit>แก้ไขข้อมูลส่วนตัว</ButtonSubmit>
                            </MoveCenter>
                        </Form.Item>
                    </Link>
                    <TextTopic2>ผลลัพธ์จากแบบทดสอบ</TextTopic2>
                    <MoveCenter>
                        <LinkResult to="/">
                            <ResultCard>
                                <AlignLeft>
                                    <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                                </AlignLeft>
                                <CardText>
                                    ลักษณะเด่นของคุณ
                                    <br />
                                    วันที่ 15 มิ.ย. 2564
                                </CardText>
                                <IconArrow />
                            </ResultCard>
                        </LinkResult>
                    </MoveCenter>
                    <TextTopic2>ประวัติการสร้างกระทู้</TextTopic2>
                    <MoveCenter>
                        <HistoryCard onClick={() => history.push('/')}>
                            <ProfileListBoard
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
                                    <ProfileListItemBoard
                                        key={item.title}
                                        actions={[<IconText icon={IconWrite} text="username" key="list-vertical-star-o" />, <IconText icon={IconLove} text="2" key="list-vertical-message" />]}
                                    >
                                        <div>
                                            <List.Item.Meta avatar={<HistoryImage src={item.avatar} width={100} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
                                        </div>
                                    </ProfileListItemBoard>
                                )}
                            />
                        </HistoryCard>
                    </MoveCenter>
                </Container>
            </BgColor>
        </div>
    );
}

export default Profile;
