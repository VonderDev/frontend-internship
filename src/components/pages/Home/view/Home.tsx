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
import Board from 'components/pages/Board/views/BoardPage/Board';

function Home() {
    const history = useHistory();
    // const { data: boardList, error: errorOfBoardList } = useSWR('/user/content/get');
    // const isLoadingBoardList = !boardList && !errorOfBoardList;
    // console.log('☯ [Board List] ☯ : ', boardList);

    //-------------- SORT DATE CREATED LATEST --------------//
    // if (boardList) {
    //     boardList?.sort(function (a: any, b: any) {
    //         return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    //     });

    //     console.log('☞ [sort Board created latest] :', boardList);
    // }

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

            <Board />

            <ButtonCreatePost onClick={() => history.push('/boardcreate')} shape="circle">
                <FileAddOutlined />
            </ButtonCreatePost>
        </Container>
    );
}

export default Home;
