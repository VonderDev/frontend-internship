import { List } from 'antd';
import { useHistory } from 'react-router-dom';
import Container from 'components/Container/Container';
import React from 'react';
import { IIconTextProfile, IListDataBoardHistory } from '../shared/Profile.interface';
import { ContainerProfile , ListProfile , ProfileListItem , HistoryText , HistoryImage} from '../shared/Profile.styles';
import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';

function BoardHistory() {
    const history = useHistory();

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
        <Container header={{ left: 'back', title: 'กระทู้ของคุณ', right: 'menu' }}>
            <ContainerProfile>
                    <ListProfile
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 4,
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
            </ContainerProfile>
        </Container>
    );
}
export default BoardHistory;
