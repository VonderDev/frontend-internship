import { Card, Spin } from 'antd';
import React, { useMemo } from 'react';
import { useHistory } from 'react-router';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import { BoardCard, CommentIcon, HistoryImage, HistoryText, RowBox, EllipsisText, CustomBox, HistoryImageDefault } from '../../shared/style';
import { LoadingOutlined } from '@ant-design/icons';
import { HeartIcon } from 'components/pages/Profile/shared/Profile.styles';
import { transalateToThai } from 'utils/transalator/transalator';
import { TextRecommendBoardTopic, ButtonSeeAllBoard } from '../../shared/style';
import { dateFormat } from 'utils/Date/DateFormat';
import { DefaultImage } from '../../shared/style/BoardContent.styled';

export const CardLatest = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const { data, error } = useSWR('/user/content/get');
    const history = useHistory();

    const listCard = useMemo(() => {
        const cards = data;
        cards?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        return (
            <div style={{ margin: '0px 0%' }}>
                {cards?.slice(0, 5).map((item: any, index: any) => {
                    return (
                        <BoardCard
                            key={index}
                            onClick={() => {
                                history.push(`/boardcontent/${item._id}`);
                            }}
                        >
                            <EllipsisText style={{ display: 'flex' }}>
                                {item?.image !== '' ? <HistoryImage src={item.image} /> : <HistoryImageDefault />}

                                <CustomBox direction="column" justify="flex-start" align="flex-start">
                                    <span style={{ fontSize: '14px', fontWeight: 'bold', textOverflow: 'ellipsis' }}>{item.title}</span>
                                    <Box direction="row" justify="flex-start" align="flex-start">
                                        <HistoryText style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--Gray-400)' }}>บทความ</HistoryText>
                                        {item?.tag?.map((item: any, index: any) => {
                                            return (
                                                <HistoryText style={{ fontSize: '12px', paddingRight: '10px', color: 'var(--Gray-400)' }} key={index}>
                                                    #{transalateToThai(item)}
                                                </HistoryText>
                                            );
                                        })}
                                    </Box>
                                    <RowBox direction="row" justify="space-between" align="flex-start" 
                                    style={{ fontSize: '12px', color: '#6E7282', marginTop: '10px', 
                                    display: 'flex', width: '80%',position:'absolute',bottom:'10px'}}>
                                        <div style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                                            <CommentIcon style={{ alignItems: 'center', display: 'flex' }} />
                                            <HistoryText>{item.author_username}</HistoryText>
                                        </div>
                                        <div style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                                            <HistoryText style={{ marginRight: '20px' }}>{dateFormat(item?.created_at)}</HistoryText>
                                            <HeartIcon />
                                            <HistoryText>{item.uid_likes.length}</HistoryText>
                                        </div>
                                    </RowBox>
                                </CustomBox>
                            </EllipsisText>
                        </BoardCard>
                    );
                })}
            </div>
        );
    }, [data]);

    const allCard = useMemo(() => {
        const isLoading = !data && !error;
        switch (true) {
            case error:
                return <div>Error ma laew jaaaaa</div>;

            case !isLoading:
                return listCard;

            default:
            case isLoading:
                return (
                    <Box direction="column" justify="center" align="center" style={{ padding: '10% 0% 10% 0%' }}>
                        <Spin indicator={antIcon} tip="Loading..." />
                    </Box>
                );
        }
    }, [data, error]);

    return (
        <>
            <Box direction="row" justify="space-between" align="flex-start" style={{ marginBottom: '15px' }}>
                <Box direction="column" justify="center" align="center" style={{ alignSelf: 'center' }}>
                    <TextRecommendBoardTopic>กระทู้</TextRecommendBoardTopic>
                </Box>
                <Box direction="column" justify="center" align="center" style={{ alignSelf: 'center' }}>
                    <ButtonSeeAllBoard onClick={() => history.push('/filter')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
                </Box>
            </Box>
            {allCard}
        </>
    );
};
