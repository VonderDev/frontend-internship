import { Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import { dateFormat } from 'utils/Date/DateFormat';
import { transalateToThai } from 'utils/transalator/transalator';
import {
    BoardImageOfContent,
    BoardList,
    BoardTextInfo,
    CommentIcon,
    ContainerOfBoardInfo,
    ContainerOfIcon,
    ContainerOfIconAndText,
    BoxOfIconAndText,
    HeartIcon,
    TextOverflowHide,
    TextTitleContent,
} from '../shared/style/boardList.styled';
import { ButtonSeeAllBoard, TextBoardTopic } from '../shared/style/homepage.styles';

function BoardListLatest() {
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
        <>
            <Row>
                <TextBoardTopic>กระทู้</TextBoardTopic>
                <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
            </Row>
            {isLoadingBoardList ? (
                <div>loading ...</div>
            ) : (
                <>
                    {boardList?.slice(0, 3).map((item: any, index: any) => {
                        return (
                            <BoardList key={index} onClick={() => history.push(`/boardcontent/${item._id}`)}>
                                <TextOverflowHide style={{ display: 'flex' }}>
                                    <div style={{}}>
                                        <BoardImageOfContent src={item.image} />
                                    </div>
                                    <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '100px' }}>
                                        <TextTitleContent>{item.title}</TextTitleContent>
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
                                        <BoxOfIconAndText direction="row" justify="space-between" align="flex-start">
                                            <div style={{ justifyContent: 'center' }}>
                                                <CommentIcon />
                                            </div>
                                            <BoardTextInfo>{item.author_username}</BoardTextInfo>
                                            <BoardTextInfo>{dateFormat(item?.created_at)}</BoardTextInfo>
                                            <div style={{ justifyContent: 'center' }}>
                                                <HeartIcon />
                                            </div>
                                            <BoardTextInfo>{item.uid_likes.length}</BoardTextInfo>
                                        </BoxOfIconAndText>
                                    </Box>
                                </TextOverflowHide>
                            </BoardList>
                        );
                    })}
                </>
            )}
        </>
    );
}
export default BoardListLatest;
