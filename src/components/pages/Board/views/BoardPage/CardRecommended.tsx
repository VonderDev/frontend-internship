import { Space } from 'antd';
import { CardStyle } from 'shared/style/theme/component';
import { GridBox } from '../../shared/style';
import { FormOutlined, HeartFilled } from '@ant-design/icons';
import { useHistory } from 'react-router';

export const CardRecommended = () => {

  const history = useHistory();
  const cardList = [
    { href: '/boardContent', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
    { href: '/boardContent', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
  ];

  return (
    <GridBox>
      <Space direction="horizontal">
        <div>
          <CardStyle typecard="Vertical" heightcard={300} 
          cover={
            <img alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }>
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