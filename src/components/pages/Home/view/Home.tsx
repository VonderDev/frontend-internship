/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { API_getStatistics } from '../apis/home.api';
import { useHistory } from 'react-router-dom';
import { Input, Row, List, Col } from 'antd';
import { CalendarOutlined, ControlOutlined, SearchOutlined, FormOutlined, HeartFilled, QuestionCircleTwoTone } from '@ant-design/icons';
import {
    SearchField,
    ImageTestPage,
    TextBoard,
    ButtonSeeAllBoard,
    ListItemBoard,
    ListBoard,
    ButtonCreateBoard,
    InputSearch,
    ButtonFilter,
    ButtonStartGame,
    TextTopicOnImageTest,
    ButtonReadOverviewTest,
    ImgBoardList,
} from '../shared/homepage.styles';
import { tagsData, IListData, IIconText } from '../shared/home.interface';
import gamePreview from '../shared/images/gamepreview.png';
import Container from 'components/Container/Container';
//
// ─── Set variable ───────────────────────────────────────────────────────────────────
//
const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const listData: Array<IListData> = [];
for (let i = 1; i < 10; i++) {
    listData.push({
        href: '/board',
        title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมสอบ... ${i}`,
        avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        description: 'บทความ #ตรรกะ  #มิติสัมพันธ์',
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
            <Container header={{ title: 'Vonder Me', right: 'menu' }}>
                {/* <SearchField>
                    <InputSearch onClick={onSearch} placeholder="Search Form" prefix={<SearchOutlined />} />
                    <ButtonFilter icon={<ControlOutlined />} />
                </SearchField> */}
                <ImageTestPage>
                    <TextTopicOnImageTest>เกมทดสอบพหุปัญญา</TextTopicOnImageTest>
                    <Col>
                        <ButtonStartGame type="primary" onClick={() => history.push('/test')}>
                            เล่นเกม
                        </ButtonStartGame>
                        <ButtonReadOverviewTest onClick={() => history.push('/testoverview')}>
                            {' '}
                            <QuestionCircleTwoTone style={{ fontSize: '150%', paddingInline: '5px' }} twoToneColor="#287fde" />
                            พหุปัญญาคืออะไร ?
                        </ButtonReadOverviewTest>
                    </Col>
                </ImageTestPage>
                <Row>
                    <TextBoard xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        กระทู้
                    </TextBoard>
                    <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
                </Row>
                <ListBoard
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={(item: any) => (
                        <ListItemBoard
                            actions={[
                                <IconText icon={FormOutlined} text="Lookmaii" key="list-vertical-star-o" />,
                                <IconText icon={CalendarOutlined} text="11 มิถุนายน 2564" key="list-vertical-like-o" />,
                                <IconText icon={HeartFilled} text="12" key="list-vertical-message" />,
                            ]}
                        >
                            <div onClick={() => history.push('/board')}>
                                <List.Item.Meta avatar={<ImgBoardList src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
                            </div>
                        </ListItemBoard>
                    )}
                />
                <ButtonCreateBoard onClick={() => history.push('/board')} shape="circle">
                    +
                </ButtonCreateBoard>
            </Container>
        </div>
    );
}

export default Home;
