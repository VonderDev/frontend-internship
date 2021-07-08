import { Row, Col, Space } from 'antd';
import { CardStyle } from 'shared/style/theme/component';
import { GridBox } from '../../shared/style';

export const CardRecommended = () => {

  return (
    <>
      <Space direction="horizontal">
        <GridBox>
          <Row gutter={16}>
            <Col className="gutter-row" span={9}>
              <CardStyle typecard="Vertical" heightcard={300}> 
                <p> Card content </p>
              </CardStyle>
            </Col>
            <Col className="gutter-row" span={15}>
              <CardStyle typecard="Vertical" heightcard={300}> CardVer </CardStyle>
            </Col>
          </Row>
        </GridBox>
      </Space>
    </>
  )
}