import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { QuestionCircleTwoTone, FileAddOutlined } from '@ant-design/icons';
import { ImageTestPage, ButtonSeeAllBoard, ButtonStartGame, TextTopicOnImageTest, ButtonReadOverviewTest, TextBoardTopic, ButtonCreatePost } from '../shared/style/homepage.styles';
import Container from 'components/Container/Container';
import useSWR from 'swr';
import { Box } from 'shared/style/theme/component';
import { transalateToThai } from 'utils/transalator/transalator';
import { CommentIcon, HeartIcon, BoardList, BoardImageOfContent, BoardTextInfo, TextOverflowHide } from '../shared/style/boardList.styled';
import { MONTHS } from 'components/pages/Board/shared/months';

function Home() {
    const history = useHistory();
    const { data: boardList, error: errorOfBoardList } = useSWR('/user/content/get');
    const isLoadingBoardList = !boardList && !errorOfBoardList;
    console.log('☯ [Board List] ☯ : ', boardList);

    //-------------- SORT DATE CREATED LATEST --------------//
    if (boardList) {
        boardList?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        console.log('☞ [sort Board created latest] :', boardList);
    }

    return (
        <Container header={{ title: 'Vonder Me', right: 'menu' }}>
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
                <TextBoardTopic xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    กระทู้
                </TextBoardTopic>
                <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
            </Row>

            {isLoadingBoardList ? (
                <div>loading ...</div>
            ) : (
                <>
                    {boardList?.slice(0, 3).map((item: any, index: any) => {
                        const cardDate = new Date(item?.created_at);
                        const dateFormat = cardDate.getDate() + MONTHS[cardDate.getMonth()] + cardDate.getFullYear();
                        return (
                            <BoardList
                                key={index}
                                onClick={() => {
                                    history.push(`/boardcontent/${item._id}`);
                                }}
                            >
                                <TextOverflowHide style={{ display: 'flex' }}>
                                    <BoardImageOfContent src={item.image} />
                                    <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '20%' }}>
                                        <BoardTextInfo style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</BoardTextInfo>
                                        <Box direction="row" justify="flex-start" align="flex-start">
                                            <BoardTextInfo style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--Gray-400)' }}>บทความ</BoardTextInfo>
                                            {item?.tag?.map((item: any, index: any) => {
                                                return (
                                                    <BoardTextInfo style={{ fontSize: '12px', paddingRight: '10px', color: 'var(--Gray-400)' }} key={index}>
                                                        #{transalateToThai(item)}
                                                    </BoardTextInfo>
                                                );
                                            })}
                                        </Box>
                                        <Box direction="row" justify="space-between" align="flex-start" style={{ fontSize: '12px', color: '#6E7282', marginTop: '10px' }}>
                                            <div style={{ justifyContent: 'center' }}>
                                                <CommentIcon />
                                            </div>
                                            <BoardTextInfo>{item.author_username}</BoardTextInfo>
                                            <BoardTextInfo>{dateFormat}</BoardTextInfo>
                                            <div style={{ justifyContent: 'center' }}>
                                                <HeartIcon />
                                            </div>
                                            <BoardTextInfo>{item.uid_likes.length}</BoardTextInfo>
                                        </Box>
                                    </Box>
                                </TextOverflowHide>
                            </BoardList>
                        );
                    })}
                </>
            )}

            <ButtonCreatePost onClick={() => history.push('/boardcreate')} shape="circle">
                <FileAddOutlined />
            </ButtonCreatePost>
        </Container>
    );
}

export default Home;
