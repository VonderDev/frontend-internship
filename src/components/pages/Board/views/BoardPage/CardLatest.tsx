import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { List } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { IIconText, IListData } from '../../shared/Card.interface';
import { ImgBoardList, ListBoard, ListItemBoard, SearchField } from "../../shared/style";

const IconText = ({ icon, text }: IIconText) => (
  <SearchField>
    {React.createElement(icon)}
    {text}
  </SearchField>
);

const listData: Array<IListData> = [];
for (let i = 1; i < 3; i++) {
  listData.push({
      href: '/boardContent',
      title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมสอบ... ${i}`,
      avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      description: 'บทความ #ตรรกะ  #มิติสัมพันธ์',
  });
}

export const CardLatest = () => {

  const history = useHistory();

  return (
    <ListBoard
      itemLayout="vertical"
      size="small"
      dataSource={listData}
      renderItem={(item: any) => (
        <ListItemBoard
          actions={[
            <IconText icon={FormOutlined} text="Lookmaii" key="list-vertical-star-o" />,
            <IconText icon={CalendarOutlined} text="11 มิถุนายน 2564" key="list-vertical-like-o" />,
            <IconText icon={HeartFilled} text="12" key="list-vertical-message" />,
          ]}
        >
          <div onClick={() => history.push('/boardContent')}>
            <List.Item.Meta avatar={<ImgBoardList src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
          </div>
        </ListItemBoard>
      )}
    />
  )
}