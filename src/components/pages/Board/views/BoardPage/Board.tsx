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
            <div style={{marginTop: '15px'}}>
                <CardTopTen />
                <CardLatest />
            </div>
    );
}

export default Board;
