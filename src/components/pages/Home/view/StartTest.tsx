import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Col } from 'antd';
import { useHistory } from 'react-router';
import { ButtonReadOverviewTest, ButtonStartGame, IconReadMore, ImageTestPage, TextTopicOnImageTest } from '../shared/style/homepage.styles';

function StartTestComponent() {
    const history = useHistory();
    return (
        <ImageTestPage>
            <TextTopicOnImageTest>เกมทดสอบพหุปัญญา</TextTopicOnImageTest>
            <Col>
                <ButtonStartGame type="primary" onClick={() => history.push('/test')}>
                    เล่นเกม
                </ButtonStartGame>
                <ButtonReadOverviewTest onClick={() => history.push('/testoverview')}>
                    {' '}
                    <IconReadMore style={{ fontSize: '150%', paddingInline: '5px' }} twoToneColor="#287fde" />
                    พหุปัญญาคืออะไร ?
                </ButtonReadOverviewTest>
            </Col>
        </ImageTestPage>
    );
}

export default StartTestComponent;
