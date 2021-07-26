import React, { useMemo } from 'react';
import { Spin, Card } from 'antd';
import useSWR from 'swr';
import { GridBox, 
    SearchField, 
    NewCardStyle, 
    HeartIconCard, 
    HeartText, 
    CardTextData, 
    SpaceCard, 
    CoverImage, 
    BoardTextInfo, 
    TextRecommendBoardTopic } from '../../shared/style';
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
    const history = useHistory();

    const toptenCard = useMemo(() => {
        const cards = data;
        cards?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
        return (
            <GridBox>
                <SpaceCard direction="horizontal">
                    {cards?.slice(0, 10).map((item: any, index: any) => {
                        const cardDate = new Date(item?.created_at);
                        const dateFormat = cardDate.getDate() + MONTHS[cardDate.getMonth()] + cardDate.getFullYear();
                        const like = item?.uid_likes;
                        return (
                            <NewCardStyle
                                typecard="Vertical"
                                heightcard={255}
                                key={index}
                                hoverable
                                cover={<CoverImage src={item?.image} style={{ borderRadius: '12px 12px 0 0' }} />}
                                onClick={() => history.push(`/boardcontent/${item._id}`)}
                                actions={[<IconText icon={FormOutlined} text={item?.author_username} />, <IconText icon={CalendarOutlined} text={dateFormat} />]}
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
        );
    }, [data]);

    const allCard = useMemo(() => {
        console.log('This is from db : ', data);
        console.log('This is error from db : ', error);
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
            <Box direction="row" justify="space-between" align="flex-start" style={{ padding: '0px 20px 0px 20px' }}>
                <Box direction="column" justify="center" align="center">
                    <TextRecommendBoardTopic>10 อันดับสูงสุด</TextRecommendBoardTopic>
                </Box>
            </Box>
            {allCard}
        </>
    );
};
