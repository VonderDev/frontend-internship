import Container from 'components/Container/Container';
import React from 'react'
import {
  TextRecommendBoardTopic,
  ButtonSeeAllBoard,
  CardContainer
} from '../../shared/style';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { CardStyle } from 'shared/style/theme/component';
import { CardLatest } from './CardLatest';
import { CardRecommended } from './CardRecommended';
import { CardTopTen } from './CardTopTen';

function Board() {

  const history = useHistory();

  return (
    <Container header={{ left: 'back', right: 'menu', title: 'กระทู้' }} >
      <Row>
        <TextRecommendBoardTopic xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          แนะนำสำหรับคุณ
        </TextRecommendBoardTopic>
        <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
      </Row>

      <CardContainer>
        <CardRecommended />
      </CardContainer>

      <Row>
        <TextRecommendBoardTopic xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          10 อันดับสูงสุด
        </TextRecommendBoardTopic>
        <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
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