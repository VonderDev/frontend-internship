import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { Row, Col, Card, Spin } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { Box, CardStyle } from 'shared/style/theme/component';
import useSWR from 'swr';
import { IIconText, IListData } from '../../shared/Card.interface';
import { BoardCard, 
    CardText, 
    CommentIcon, 
    HeartIconList, 
    HistoryImage, 
    HistoryText, 
    ImgBoardList, 
    ListBoard, 
    ListItemBoard, 
    RowStyled, 
    SearchField,
    CardTextData, 
    EllipsisText} from "../../shared/style";
import { LoadingOutlined } from '@ant-design/icons';
import { HeartIcon } from 'components/pages/Profile/shared/Profile.styles';

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
  console.log('Card Top10 Data : ', data);
  const history = useHistory();

  return (
    <>
    {isLoading ? (
      <Spin indicator={antIcon} tip="Loading..." />
  ) : (
      <>
      {data?.map((item: any, index: any) => {
          const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
          const cardDate = new Date(item?.created_at);
          const dateFormat = cardDate.getDate() + months[cardDate.getMonth()] + cardDate.getFullYear();
          return (
              <BoardCard
                  key={index}
                  onClick={() => {
                      history.push('/boardContent');
                  }}
              >
                 <EllipsisText style={{ display: 'flex' }}>
                                  <HistoryImage src={item.image} />
                                  <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '25%' }}>
                                      <HistoryText style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</HistoryText>
                                      <Box direction="row" justify="flex-start" align="flex-start">
                                          <HistoryText style={{ fontSize: '12px', fontWeight: 'bold', color : 'var(--Gray-400)' }}>บทความ</HistoryText>
                                          {item?.tag?.map((item: any, index: any) => {
                                              return (
                                                  <HistoryText style={{ fontSize: '12px', paddingRight: '10px', color : 'var(--Gray-400)' }} key={index}>
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
      })}
      </>
  )}
  </>
  )
}