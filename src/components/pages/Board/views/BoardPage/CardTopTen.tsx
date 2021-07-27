import React from 'react';
import { Spin, Card } from 'antd';
import useSWR from 'swr';
import { GridBox, SearchField, NewCardStyle, HeartIconCard, HeartText, CardTextData, SpaceCard, CoverImage, BoardTextInfo, TextRecommendBoardTopic } from '../../shared/style';
import { FormOutlined, LoadingOutlined, CalendarOutlined } from '@ant-design/icons';
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
    const isLoading = !data && !error;
    const history = useHistory();

    if (data) {
        data?.sort(function (a: any, b: any) {
            return b.uid_likes.length - a.uid_likes.length;
        });
    }

    return (
        <>
            <Box direction="row" justify="space-between" align="flex-start">
                <Box direction="column" justify="center" align="center">
                    <TextRecommendBoardTopic>10 อันดับสูงสุด</TextRecommendBoardTopic>
                </Box>
            </Box>
            {isLoading ? (
                <Box direction="column" justify="center" align="center" style={{ padding: '10% 0% 10% 0%' }}>
                    <Spin indicator={antIcon} tip="Loading..." />
                </Box>
            ) : (
                <GridBox>
                    <SpaceCard>
                        {data?.slice(0, 10).map((item: any, index: any) => {
                            const like = item?.uid_likes;
                            return (
                                <NewCardStyle
                                    typecard="Vertical"
                                    heightcard={255}
                                    key={index}
                                    hoverable
                                    cover={<CoverImage src={item?.image} style={{ borderRadius: '12px 12px 0 0' }} />}
                                    onClick={() => history.push(`/boardcontent/${item._id}`)}
                                    actions={[<IconText icon={FormOutlined} text={item?.author_username} />, <IconText icon={CalendarOutlined} text={dateFormat(item?.created_at)} />]}
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
                                        <HeartText>{like.length}</HeartText>
                                    </div>
                                </NewCardStyle>
                            );
                        })}
                    </SpaceCard>
                </GridBox>
            )}
        </>
    );
};
