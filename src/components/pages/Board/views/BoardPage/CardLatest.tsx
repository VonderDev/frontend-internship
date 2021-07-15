import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { Row, Col, Card, Spin } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { CardStyle } from 'shared/style/theme/component';
import useSWR from 'swr';
import { IIconText, IListData } from '../../shared/Card.interface';
import { BoardCard, CardText, CommentIcon, HeartIconList, HistoryImage, HistoryText, ImgBoardList, ListBoard, ListItemBoard, RowStyled, SearchField } from "../../shared/style";
import { LoadingOutlined } from '@ant-design/icons';

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
          return (
              <BoardCard
                  key={index}
                  onClick={() => {
                      history.push('/boardContent');
                  }}
              >
                  <RowStyled>
                      <Col span={7}>
                          <HistoryImage src={item?.image} />
                      </Col>
                      <Col span={17}>
                          <CardText>
                              <Row>
                                  <HistoryText>{item?.title}</HistoryText>
                              </Row>
                              <Row>
                                  <HistoryText>{item?.content_body}</HistoryText>
                              </Row>
                              <Row>
                                  <Col span={2}>
                                      <CommentIcon />
                                  </Col>
                                  <Col span={10}>
                                      <HistoryText>{item?.author_username}</HistoryText>
                                  </Col>
                                  <Col span={8}>
                                      <HistoryText>{item?.created_at}</HistoryText>
                                  </Col>
                                  <Col span={2}>
                                      <HeartIconList />
                                  </Col>
                                  <Col span={2}>
                                      <HistoryText>{item?.uid_likes.length}</HistoryText>
                                  </Col>
                              </Row>
                          </CardText>
                      </Col>
                  </RowStyled>
              </BoardCard>
          );
      })}
      </>
  )}
  </>
  )
}