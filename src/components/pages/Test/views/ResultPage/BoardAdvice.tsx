import { Row } from 'antd';
import { IIconText } from 'components/pages/Home/shared/home.interface';
import { ButtonSeeAllBoard, SearchField, TextBoardTopic } from 'components/pages/Home/shared/style/homepage.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerBoard } from '../../shared/styles/Result/ResultPage.styled';
import { GridBox } from '../../shared/styles/Result/ResultFeature.styled';
import Meta from 'antd/lib/card/Meta';
import { MONTHS } from 'components/pages/Board/shared/months';
import { NewCardStyle, HeartIconCard, HeartText, CardTextData, SpaceCard, CoverImage, BoardTextInfo } from '../../../Board/shared/style';
import { Box } from 'shared/style/theme/component';
import { transalateToThai } from 'utils/transalator/transalator';
import { FormOutlined, CalendarOutlined } from '@ant-design/icons';
import useSWR from 'swr';

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);

const BoardAdvice = () => {
    const history = useHistory();
    const { data, error } = useSWR('/user/content/get');

    if (data) {
        data?.sort(function (a: any, b: any) {
            return b.uid_likes.length - a.uid_likes.length;
        });
    }

    return (
        <>
            <Row>
                <TextBoardTopic>แนะนำสำหรับคุณ</TextBoardTopic>
                <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
            </Row>
            <ContainerBoard>
                {' '}
                <GridBox>
                    <SpaceCard direction="horizontal">
                        {data?.slice(0, 3).map((item: any, index: any) => {
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
            </ContainerBoard>
        </>
    );
};

export default BoardAdvice;
