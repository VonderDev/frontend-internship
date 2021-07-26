import { Row } from 'antd';
import { IIconText } from 'components/pages/Home/shared/home.interface';
import { SearchField, TextBoardTopic } from 'components/pages/Home/shared/style/homepage.styles';
import { useHistory } from 'react-router-dom';
import { ContainerBoard } from '../../shared/styles/Result/ResultPage.styled';
import { BoardCardRecommend, BoardCardSpace, GridBox, ListCategoryAndTag } from '../../shared/styles/Result/ResultFeature.styled';
import Meta from 'antd/lib/card/Meta';
import { HeartIconCard, HeartText, CoverImage, BoardTextInfo } from '../../../Board/shared/style';
import { Box } from 'shared/style/theme/component';
import { transalateToThai } from 'utils/transalator/transalator';
import { FormOutlined, CalendarOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import React from 'react';
import { dateFormat } from 'utils/Date/DateFormat';
import { useParams } from 'react-router-dom';

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);

const BoardAdvice = () => {
    const history = useHistory();
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    const tokenGuest = localStorage.getItem('tokenGuest');
    const [recommendContent, setRecommendContent] = useState<any>(null);

    const { data: boardRecommend, error: errorBoardRecommend } = useSWR('/user/content/result');

    //---------------------- GET PARAM & BOARD RECOMMEND FOR RESULT HISTORY ----------------------//
    const paramObjectId = useParams<{ id: string; index: string }>();
    const { data: boardRecommendHistory, error: errorBoardRecommendHistory } = useSWR(Object.keys(paramObjectId).length ? `/user/content/result/${paramObjectId?.index}` : null);

    useEffect(() => {
        console.log('[param] :', paramObjectId);
        if (boardRecommend && (token || tokenGuest)) {
            setRecommendContent(boardRecommend);
            console.log('Result Data', recommendContent);
        }
        if (boardRecommendHistory && paramObjectId) {
            setRecommendContent(boardRecommendHistory);
            console.log('[Result Profile data]:', recommendContent);
        }
    }, [paramObjectId, boardRecommend, boardRecommendHistory]);

    //-------------------- RANDOM RECOMMENT BOARD --------------------//
    // useEffect(() => {
    //     if (boardRecommend) {
    //         const newRandomBoard = [];
    //         for (var i = 0; i < 3; i++) {
    //             var idex = Math.floor(Math.random() * boardRecommend.length);
    //             newRandomBoard.push(boardRecommend[idex]);
    //         }
    //         console.log('[Random board Recommend]:', newRandomBoard);
    //         setRandomBoard(newRandomBoard);
    //     }
    // }, [boardRecommend]);

    return (
        <>
            <Row>
                <TextBoardTopic>แนะนำสำหรับคุณ</TextBoardTopic>
            </Row>
            <ContainerBoard>
                {' '}
                <GridBox>
                    <BoardCardSpace direction="horizontal">
                        {recommendContent?.map((item: any, index: any) => {
                            const like = item?.uid_likes;
                            return (
                                <BoardCardRecommend
                                    typecard="Vertical"
                                    heightcard={255}
                                    key={index}
                                    hoverable
                                    cover={<CoverImage src={item?.image} style={{ borderRadius: '12px 12px 0 0' }} />}
                                    onClick={() => history.push(`/boardcontent/${item._id}`)}
                                    actions={[<IconText icon={FormOutlined} text={item?.author_username} />, <IconText icon={CalendarOutlined} text={dateFormat(item?.created_at)} />]}
                                >
                                    <Meta title={item?.title} />
                                    <ListCategoryAndTag>
                                        <Box direction="row" justify="flex-start" align="flex-start">
                                            <BoardTextInfo style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--Gray-400)', paddingRight: '5px' }}>บทความ</BoardTextInfo>
                                            {item?.tag?.map((item: any, index: any) => {
                                                return (
                                                    <BoardTextInfo style={{ fontSize: '12px', fontWeight: 'normal', paddingRight: '5px', color: 'var(--Gray-400)' }} key={index}>
                                                        #{transalateToThai(item)}
                                                    </BoardTextInfo>
                                                );
                                            })}
                                        </Box>
                                    </ListCategoryAndTag>
                                    <div>
                                        <HeartIconCard />
                                        <HeartText>{like?.length}</HeartText>
                                    </div>
                                </BoardCardRecommend>
                            );
                        })}
                    </BoardCardSpace>
                </GridBox>
            </ContainerBoard>
        </>
    );
};

export default BoardAdvice;
