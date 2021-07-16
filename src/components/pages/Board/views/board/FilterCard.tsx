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
                      return (
                          <BoardCard
                              key={index}
                              //onClick={history.pushState(`/board`)}
                          >
                              <EllipsisText style={{ display: 'flex' }}>
                                  <HistoryImage src={item.image} />
                                  <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '25%'}}>
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
                                      <Box direction="row" justify="space-between" align="flex-start" style={{ fontSize: '12px' , color: '#6E7282' , marginTop: '10px'}}>
                                          <div style={{ justifyContent: 'center' }}>
                                              <CommentIcon />
                                          </div>
                                          <HistoryText>{item.author_username}</HistoryText>
                                          <HistoryText>{"10 ก.ค. 2021"}</HistoryText>
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
