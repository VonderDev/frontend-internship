import React from 'react';
import Container from 'components/Container/Container';
import { TextRecommendBoardTopic, ButtonSeeAllBoard, CardContainer } from '../../shared/style';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { CardLatest } from './CardLatest';
import { CardTopTen } from './CardTopTen';
import Filter from '../Board/Filter';

function Board() {
    const history = useHistory();

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'กระทู้' }}>
            <div>
                <Filter />

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' , padding : '0px 20px 0px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextRecommendBoardTopic>10 อันดับสูงสุด</TextRecommendBoardTopic>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ButtonSeeAllBoard onClick={() => history.push('/boardTopTen')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
                    </div>
                </div>

                <CardContainer>
                    <CardTopTen />
                </CardContainer>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' , padding : '0px 20px 0px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TextRecommendBoardTopic>ล่าสุด</TextRecommendBoardTopic>
                  </div>
                </div>

                <CardContainer>
                    <CardLatest />
                </CardContainer>
            </div>
        </Container>
    );
}

export default Board;
