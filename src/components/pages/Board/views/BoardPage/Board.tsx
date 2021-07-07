import Container from 'components/Container/Container';
import React from 'react'
import Typography from 'shared/style/theme/Typograhy';
import {
  TextRecommendBoardTopic,
  ButtonSeeAllBoard
} from '../../shared/style';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { CardStyle } from 'shared/style/theme/component';

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

      <Row>
        <Col>
          <CardStyle typecard="Vertical" heightcard={300}> CardVer </CardStyle>
        </Col>
        <Col>
          <CardStyle typecard="Vertical" heightcard={300}> CardVer </CardStyle>
        </Col>

      </Row>

    </Container>
  );
}

export default Board;

