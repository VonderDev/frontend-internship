import { BoardCard, CommentIcon, CustomBox, EllipsisText, HeartIcon, HistoryImage, HistoryText } from 'components/pages/Profile/shared/Profile.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from 'shared/style/theme/component';
import { dateFormat } from 'utils/Date/DateFormat';
import { transalateToThai } from 'utils/transalator/transalator';
import { HistoryImageDefault } from '../../shared/style';

interface CardComponentProps {
    data: any | null;
}

const BoardCardComponent: React.FC<CardComponentProps> = ({ data }) => {
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
                ? data.map((item: any, index: any) => {
                      return (
                          <BoardCard key={index} onClick={() => history.push(`/boardcontent/${item._id}`)}>
                              <EllipsisText style={{ display: 'flex' }}>
                                  <div style={{}}>{item?.image !== '' ? <HistoryImage src={item.image} /> : <HistoryImageDefault />}</div>
                                  <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '100px' }}>
                                      <HistoryText style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</HistoryText>
                                      <Box direction="row" justify="flex-start" align="flex-start">
                                          <HistoryText style={{ fontSize: '12px', fontWeight: 'bold' }}>{transalateToThai(item.content_type)}</HistoryText>
                                          {item?.tag?.map((item: any, index: any) => {
                                              return (
                                                  <HistoryText style={{ fontSize: '12px', paddingRight: '10px' }} key={index}>
                                                      #{transalateToThai(item)}
                                                  </HistoryText>
                                              );
                                          })}
                                      </Box>
                                      <CustomBox direction="row" justify="space-between" align="flex-start">
                                          <div style={{ justifyContent: 'center' }}>
                                              <CommentIcon />
                                          </div>
                                          <HistoryText>{item.author_username}</HistoryText>
                                          <HistoryText>{dateFormat(item?.created_at)}</HistoryText>
                                          <div style={{ justifyContent: 'center' }}>
                                              <HeartIcon />
                                          </div>
                                          <HistoryText>{item.uid_likes.length}</HistoryText>
                                      </CustomBox>
                                  </Box>
                              </EllipsisText>
                          </BoardCard>
                      );
                  })
                : null}
        </>
    );
};
export default BoardCardComponent;
