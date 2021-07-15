import { Col, Row } from 'antd';
import { BoardCard, RowStyled, HistoryImage, CardText, HistoryText, CommentIcon, HeartIcon } from 'components/pages/Profile/shared/Profile.styles';
import React from 'react';

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
                              // onClick={history.pushState(`/board`)}
                          >
                              <RowStyled>
                                  <Col span={7}>
                                      <HistoryImage src={item.image} />
                                  </Col>
                                  <Col span={17}>
                                      <CardText>
                                          <Row>
                                              <HistoryText>{item.title}</HistoryText>
                                          </Row>
                                          <Row>
                                              <HistoryText>{item.content_body}</HistoryText>
                                          </Row>
                                          <Row>
                                              <Col span={2}>
                                                  <CommentIcon />
                                              </Col>
                                              <Col span={10}>
                                                  <HistoryText>{item.author_username}</HistoryText>
                                              </Col>
                                              <Col span={8}>
                                                  <HistoryText>{item.created_at}</HistoryText>
                                              </Col>
                                              <Col span={2}>
                                                  <HeartIcon />
                                              </Col>
                                              <Col span={2}>
                                                  <HistoryText>{item.uid_likes.lenght}</HistoryText>
                                              </Col>
                                          </Row>
                                      </CardText>
                                  </Col>
                              </RowStyled>
                          </BoardCard>
                      );
                  })
                : null}
        </>
    );
};
export default FilterCard;
