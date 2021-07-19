import { BoardCard, CommentIcon, EllipsisText, HeartIcon, HistoryImage, HistoryText } from 'components/pages/Profile/shared/Profile.styles';
import React from 'react';
import { Box } from 'shared/style/theme/component';

interface CardComponentProps {
    tagFilterData: any | null;
}

const FilterCard: React.FC<CardComponentProps> = ({ tagFilterData }) => {
    return (
        <>
            {tagFilterData
                ? tagFilterData.map((item: any, index: any) => {
                      const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
                      const dateCreatedFilter = new Date(item.created_at);
                      const dateFormat = dateCreatedFilter.getDate() + ' ' + months[dateCreatedFilter.getMonth()] + ' ' + dateCreatedFilter.getFullYear();
                      return (
                          <BoardCard
                              key={index}
                              //onClick={history.pushState(`/board`)}
                          >
                              <EllipsisText style={{ display: 'flex' }}>
                                  <HistoryImage src={item.image} />
                                  <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '25%' }}>
                                      <HistoryText style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</HistoryText>
                                      <Box direction="row" justify="flex-start" align="flex-start">
                                          <HistoryText style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.content_type}</HistoryText>
                                          {item?.tag?.map((item: any, index: any) => {
                                              return (
                                                  <HistoryText style={{ fontSize: '12px', paddingRight: '10px' }} key={index}>
                                                      #{item}
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
                                  </Box>
                              </EllipsisText>
                          </BoardCard>
                      );
                  })
                : null}
        </>
    );
};
export default FilterCard;
