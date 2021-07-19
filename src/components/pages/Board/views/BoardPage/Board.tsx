import React from 'react'
import Container from 'components/Container/Container';
import {
  TextRecommendBoardTopic,
  ButtonSeeAllBoard,
  CardContainer,
  GridBox
} from '../../shared/style';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { CardLatest } from './CardLatest';
import { CardTopTen } from './CardTopTen';

function Board() {

  const history = useHistory();

  return (
    <Container header={{ left: 'back', right: 'menu', title: 'กระทู้' }} >

      <Row>
        <TextRecommendBoardTopic xs={{ span: 7, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          10 อันดับสูงสุด
        </TextRecommendBoardTopic>
        <ButtonSeeAllBoard onClick={() => history.push('/boardTopTen')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
      </Row>

      <CardContainer>
        <CardTopTen />
      </CardContainer>

      <Row>
        <TextRecommendBoardTopic xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          ล่าสุด
        </TextRecommendBoardTopic>
      </Row>

      <CardContainer>
        <CardLatest />
      </CardContainer>

    </Container>
  );
}

export default Board;