import { Space } from 'antd';
import { CardStyle } from 'shared/style/theme/component';
import { GridBox } from '../../shared/style';
export const CardTopTen = () => {

    return (
        <GridBox>
        <Space direction="horizontal">
          <div>
            <CardStyle typecard="Vertical" heightcard={300}>
              <p> Card content </p>
              <p> Card content </p>
            </CardStyle>
          </div>
          <div>
            <CardStyle typecard="Vertical" heightcard={300}>
              <p> Card content </p>
              <p> Card content </p>
            </CardStyle>
          </div>
          <div>
            <CardStyle typecard="Vertical" heightcard={300}>
              <p> Card content </p>
              <p> Card content </p>
            </CardStyle>
          </div>
          <div>
            <CardStyle typecard="Vertical" heightcard={300}>
              <p> Card content </p>
              <p> Card content </p>
            </CardStyle>
          </div>
        </Space>
      </GridBox>
    )
}