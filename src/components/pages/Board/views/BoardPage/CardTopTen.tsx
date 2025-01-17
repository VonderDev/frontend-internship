import React, { useMemo } from 'react';
import { Spin, Card } from 'antd';
import useSWR from 'swr';
import {
    GridBox,
    SearchField,
    NewCardStyle,
    HeartIconCard,
    HeartText,
    CardTextData,
    SpaceCard,
    CoverImage,
    BoardTextInfo,
    TextRecommendBoardTopic,
    CoverImageDefault,
    CommentIcon,
    HistoryText,
    TextRecommendBoardTopTen,
} from '../../shared/style';
import { LoadingOutlined } from '@ant-design/icons';
import { IIconText } from '../../shared/Card.interface';
import { useHistory } from 'react-router';
import { transalateToThai } from 'utils/transalator/transalator';
import { Box } from 'shared/style/theme/component';
import { dateFormat } from 'utils/Date/DateFormat';

const { Meta } = Card;

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);
export const CardTopTen = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const { data, error } = useSWR('/user/content/get');
    const history = useHistory();

    const toptenCard = useMemo(() => {
        const cards = data;
        cards?.sort(function (a: any, b: any) {
            return b?.uid_likes?.length - a?.uid_likes?.length;
        });
        return (
            <GridBox>
                <SpaceCard direction="horizontal">
                    {cards?.slice(0, 10).map((item: any, index: any) => {
                        const like = item?.uid_likes;
                        return (
                            <NewCardStyle
                                typecard="Vertical"
                                heightcard={255}
                                key={index}
                                hoverable
                                cover={
                                    item?.image !== '' ? <CoverImage src={item?.image} style={{ borderRadius: '12px 12px 0 0' }} /> : <CoverImageDefault style={{ borderRadius: '12px 12px 0 0' }} />
                                }
                                onClick={() => history.push(`/boardcontent/${item._id}`)}
                                actions={[
                                    <Box
                                        direction="row"
                                        justify="space-between"
                                        align="flex-start"
                                        style={{ fontSize: '12px', color: '#6E7282', marginLeft: '12px', display: 'flex', width: '100%', transform: 'translateY(-5px)' }}
                                    >
                                        <div style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                                            <CommentIcon style={{ alignItems: 'center', display: 'flex' }} />
                                            <HistoryText>{item.author_username}</HistoryText>
                                        </div>
                                        <div style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                                            <HistoryText style={{ marginRight: '20px' }}>{dateFormat(item?.created_at)}</HistoryText>
                                        </div>
                                    </Box>,
                                ]}
                            >
                                <Meta title={item?.title} />

                                <CardTextData>
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
                                </CardTextData>
                                <div>
                                    <HeartIconCard />
                                    <HeartText>{like?.length}</HeartText>
                                </div>
                            </NewCardStyle>
                        );
                    })}
                </SpaceCard>
            </GridBox>
        );
    }, [data]);

    const allCard = useMemo(() => {
        const isLoading = !data && !error;
        switch (true) {
            case error:
                return <div>Error ma laew jaaaaa</div>;

            case !isLoading:
                return toptenCard;

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
            <Box direction="row" justify="space-between" align="flex-start">
                <Box direction="column" justify="center" align="center">
                    <TextRecommendBoardTopTen>10 อันดับสูงสุด</TextRecommendBoardTopTen>
                </Box>
            </Box>
            {allCard}
        </>
    );
};
