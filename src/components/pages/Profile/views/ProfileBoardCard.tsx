import { HistoryImageDefault } from 'components/pages/Board/shared/style';
import { BoardCard, CommentIcon, EllipsisText, HeartIcon, HistoryImage, HistoryText } from 'components/pages/Profile/shared/Profile.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from 'shared/style/theme/component';
import { dateFormat } from 'utils/Date/DateFormat';
import { transalateToThai } from 'utils/transalator/transalator';

interface CardComponentProps {
    data: any | null;
}

const ProfileBoardCard: React.FC<CardComponentProps> = ({ data }) => {
    const history = useHistory();
    if (data) {
        data?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        //console.log('☞ [sort Board created latest] :', data);
    }
    return (
        <>
            {data
                ? data.slice(0, 3).map((item: any, index: any) => {
                      return (
                          <BoardCard key={index} onClick={() => history.push(`/boardcontent/${item?._id}`)}>
                              <EllipsisText style={{ display: 'flex' }}>
                                  <HistoryImage src={item?.image} />
                                  {item?.image !== '-' ? <HistoryImage src={item.image} /> : <HistoryImageDefault />}
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
    );
};
export default ProfileBoardCard;
