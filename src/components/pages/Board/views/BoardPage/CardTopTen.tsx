import { Row, Col } from 'antd';
import { CardStyle } from 'shared/style/theme/component';

export const CardTopTen = () => {


    return (
        <Row>
          <Col>
            <CardStyle typecard="Vertical" heightcard={300}> CardVer </CardStyle>
          </Col>
          <Col>
            <CardStyle typecard="Vertical" heightcard={300}> CardVer </CardStyle>
          </Col>
        </Row>
    )
}