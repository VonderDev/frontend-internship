import { Card, Spin } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import { IIconText } from '../../shared/Card.interface';
import { BoardCard, 
    CommentIcon, 
    HistoryImage, 
    HistoryText, 
    SearchField, 
    EllipsisText,
    CustomBox } from '../../shared/style';
import { LoadingOutlined } from '@ant-design/icons';
import { HeartIcon } from 'components/pages/Profile/shared/Profile.styles';
import { transalateToThai } from 'utils/transalator/transalator';
import { TextRecommendBoardTopic, ButtonSeeAllBoard } from '../../shared/style';
const { Meta } = Card;

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);

export const CardLatest = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const { data, error } = useSWR('/user/content/get');
    const isLoading = !data && !error;
    const history = useHistory();

    if (data) {
        data?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
    }

    return (
        <>
            <Box direction="row" justify="space-between" align="flex-start" style={{ padding: '0px 20px 0px 20px' ,margin: '10px 0px'}}>
                <Box direction="column" justify="center" align="center">
                        <TextRecommendBoardTopic>ล่าสุด</TextRecommendBoardTopic>
                </Box>
                <Box direction="column" justify="center" align="center">
                    <ButtonSeeAllBoard onClick={() => history.push('/filter')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
                </Box>
            </Box>
            {isLoading ? (
                <div>
                    <Box direction="column" justify="center" align="center" style={{ padding: '10% 0% 10% 0%' }}>
                        <Spin indicator={antIcon} tip="Loading..." />
                    </Box>
                </div>
            ) : (
                <>
                <div style={{margin:'0px 5%'}}>
                    {data?.slice(0, 3).map((item: any, index: any) => {
                        const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
                        const cardDate = new Date(item?.created_at);
                        const dateFormat = cardDate.getDate() + months[cardDate.getMonth()] + cardDate.getFullYear();
                        return (
                            <BoardCard
                                key={index}
                                onClick={() => {
                                    history.push(`/boardcontent/${item._id}`);
                                }}
                            >
                                <EllipsisText style={{ display: 'flex' }}>
                                    <HistoryImage src={item.image} />
                                    <CustomBox direction="column" justify="flex-start" align="flex-start" >
                                        <HistoryText style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</HistoryText>
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
                                        <Box direction="row" justify="space-between" align="flex-start" style={{ fontSize: '12px', color: '#6E7282', marginTop: '10px' }}>
                                            <div style={{ justifyContent: 'center' }}>
                                                <CommentIcon />
                                            </div>
                                            <HistoryText>{item.author_username}</HistoryText>
                                            <HistoryText>{dateFormat}</HistoryText>
                                            <div style={{ justifyContent: 'center' }}>
                                                <HeartIcon />
                                            </div>
                                            <HistoryText>{item.uid_likes.length}</HistoryText>
                                        </Box>
                                    </CustomBox>
                                </EllipsisText>
                            </BoardCard>
                        );
                    })}
                    </div>
                </>
            )}
        </>
    );
};
