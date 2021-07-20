import React from 'react';
import Container from 'components/Container/Container';
import { TextRecommendBoardTopic, ButtonSeeAllBoard } from '../../shared/style';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { CardLatest } from './CardLatest';
import { CardTopTen } from './CardTopTen';
import Filter from '../Board/Filter';
import { Box } from 'shared/style/theme/component';

function Board() {
    const history = useHistory();

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'กระทู้' }}>
            <div>
                <Filter />

                <Box direction="row" justify="space-between" align="flex-start" style={{ padding: '0px 20px 0px 20px' }}>
                    <Box direction="column" justify="center" align="center">
                        <TextRecommendBoardTopic>10 อันดับสูงสุด</TextRecommendBoardTopic>
                    </Box>
                    <Box direction="column" justify="center" align="center">
                        <ButtonSeeAllBoard onClick={() => history.push('/boardTopTen')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
                    </Box>
                </Box>

                <div>
                    <CardTopTen />
                </div>

                <Box direction="row" justify="space-between" align="flex-start" style={{ padding: '0px 20px 0px 20px' }}>
                    <Box direction="column" justify="center" align="center">
                        <TextRecommendBoardTopic>ล่าสุด</TextRecommendBoardTopic>
                    </Box>
                </Box>

                <div>
                    <CardLatest />
                </div>
            </div>
        </Container>
    );
}

export default Board;
