import { Card, Spin } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import { BoardCard, CommentIcon, HistoryImage, HistoryText, SearchField, EllipsisText, CustomBox } from '../../shared/style';
import { LoadingOutlined } from '@ant-design/icons';
import { HeartIcon } from 'components/pages/Profile/shared/Profile.styles';
import { transalateToThai } from 'utils/transalator/transalator';
import { TextRecommendBoardTopic, ButtonSeeAllBoard } from '../../shared/style';
import { MONTHS } from '../../shared/months';
import { dateFormat } from 'utils/Date/DateFormat';

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
            <Box direction="row" justify="space-between" align="flex-start">
                <Box direction="column" justify="center" align="center">
                    <TextRecommendBoardTopic>ล่าสุด</TextRecommendBoardTopic>
                </Box>
                <Box direction="column" justify="center" align="center" style={{ alignSelf: 'center' }}>
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
                    {data
                        ? data.slice(0, 3).map((item: any, index: any) => {
                              return (
                                  <BoardCard key={index} onClick={() => history.push(`/boardcontent/${item?._id}`)}>
                                      <EllipsisText style={{ display: 'flex' }}>
                                          <HistoryImage src={item?.image} />
                                          <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '100px' }}>
                                              <HistoryText style={{ fontSize: '14px', fontWeight: 'bold' }}>{item?.title}</HistoryText>
                                              <Box direction="row" justify="flex-start" align="flex-start">
                                                  <HistoryText style={{ fontSize: '12px', fontWeight: 'bold' }}>{transalateToThai(item?.content_type)}</HistoryText>
                                                  {item?.tag?.map((item: any, index: any) => {
                                                      return (
                                                          <HistoryText style={{ fontSize: '12px', paddingRight: '10px' }} key={index}>
                                                              #{transalateToThai(item)}
                                                          </HistoryText>
                                                      );
                                                  })}
                                              </Box>
                                              <Box direction="row" justify="space-between" align="flex-start" style={{ fontSize: '12px', color: '#6E7282', marginTop: '10px' }}>
                                                  <div style={{ justifyContent: 'center' }}>
                                                      <CommentIcon />
                                                  </div>
                                                  <HistoryText>{item?.author_username}</HistoryText>
                                                  <HistoryText>{dateFormat(item?.created_at)}</HistoryText>
                                                  <div style={{ justifyContent: 'center' }}>
                                                      <HeartIcon />
                                                  </div>
                                                  <HistoryText>{item?.uid_likes.length}</HistoryText>
                                              </Box>
                                          </Box>
                                      </EllipsisText>
                                  </BoardCard>
                              );
                          })
                        : null}
                </>
            )}
        </>
    );
};
