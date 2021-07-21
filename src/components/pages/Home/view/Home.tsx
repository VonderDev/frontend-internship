/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { API_getStatistics } from '../apis/home.api';
import { useHistory } from 'react-router-dom';
import { Input, Row, List } from 'antd';
import { MessageOutlined, LikeOutlined, UserOutlined, RightOutlined } from '@ant-design/icons';
import {
    SearchField,
    TagFilter,
    ButtonTagFilter,
    ImageTestPage,
    TextBoard,
    IconArrow,
    ButtonSeeAllBoard,
    ListItemBoard,
    ListBoard,
    TextOnImageTest,
    ButtonCreateBoard,
} from '../shared/homepage.styles';
import { tagsData, IListData, IIconText } from '../shared/home.interface';

//
// ─── Set variable ───────────────────────────────────────────────────────────────────
//
const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const listData: Array<IListData> = [];
for (let i = 1; i < 10; i++) {
    listData.push({
        href: '/board',
        title: `แนะนำกระทู้เรียน ${i}`,
        avatar: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/59064493_437047506858059_6394542383404417024_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aMf0eSHrFroAX87NAZJ&tn=CeGl5CLqXgfyZu7t&_nc_ht=scontent.fbkk12-1.fna&oh=2b1b5b5642904a40a58edd5a57f17a7e&oe=60CB2D93',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        description: 'Coming soon ... บทความ  สายวิทย์-คณิต  วิศวะ  หนังสือ',
    });
}

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);

function Home() {
    //get Data from home.api
    async function getStatictisData() {
        const response = await API_getStatistics();
        if (response.success) {
            console.log(response.data.title);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatictisData();
    }, []);

    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();

    return (
        <div>
            <SearchField>
                <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 250 }} />
            </SearchField>
            <TagFilter className="site-button-ghost-wrapper">
                <ButtonTagFilter type="primary" ghost>
                    {tagsData.tagOne}
                </ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagTwo}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagThree}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagFour}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagFive}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagSix}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagSeven}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData.tagEight}</ButtonTagFilter>
            </TagFilter>
            <ImageTestPage className="center" onClick={() => history.push('/test')}>
                <TextOnImageTest>มาทำแบบทดสอบกันเถอะ !</TextOnImageTest>
                <IconArrow onClick={() => history.push('/test')} />
            </ImageTestPage>
            <Row>
                <TextBoard xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    กระทู้
                </TextBoard>
                <TextBoard xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูทั้งหมด</ButtonSeeAllBoard>
                </TextBoard>
            </Row>
            <ListBoard
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
                    <ListItemBoard
                        key={item.title}
                        actions={[
                            <IconText icon={UserOutlined} text="username" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="150" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                    >
                        <div>
                            <List.Item.Meta avatar={<img src={item.avatar} width={100} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
                        </div>
                    </ListItemBoard>
                )}
            />
            <ButtonCreateBoard onClick={() => history.push('/board')} shape="circle">
                +
            </ButtonCreateBoard>
        </div>
    );
}

export default Home;
