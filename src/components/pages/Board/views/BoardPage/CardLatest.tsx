import { CalendarOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { List, Space, Card, Spin } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { CardStyle } from 'shared/style/theme/component';
import useSWR from 'swr';
import { IIconText, IListData } from '../../shared/Card.interface';
import { ImgBoardList, ListBoard, ListItemBoard, SearchField } from "../../shared/style";
import { LoadingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const IconText = ({ icon, text }: IIconText) => (
  <SearchField>
    {React.createElement(icon)}
    {text}
  </SearchField>
);


export const CardLatest = () => {
  
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { data, error } = useSWR('/user/content/get');
  const isLoading = !data && !error;
  console.log('Card Top10 Data : ', data);
  const history = useHistory();
  const listData: Array<IListData> = [];
  for (let i = 1; i < 3; i++) {
    listData.push({
      href: '/boardContent',
      title: '{data.title}',
      avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      description: 'บทความ #ตรรกะ  #มิติสัมพันธ์',
    });
  }
  console.log("Card Latest data : ", data);

  return (
    // <>
    //   {isLoading ? (
    //     <Spin indicator={antIcon} tip="Loading..." />
    //   ) : (
    //     <CardStyle typecard="Horizontal" widthcard={80}
    //       hoverable
    //       onClick={() => history.push('/boardContent')}
    //       cover={
    //         <img alt="default"
    //           src="https://s.keepmeme.com/files/en_posts/20200908/blurred-surprised-cat-meme-5b734a45210ef3b6657bcbe2831715fa.jpg"
    //           style={{ width : "88px", height : "88px" }}
    //         />
    //       }
    //       title="This is a cat."
    //     // actions={
    //     //   [
    //     //     <IconText icon={FormOutlined} text={item.author_username} />,
    //     //   ]
    //     // }
    //     >
    //     </CardStyle>
    //   )}
    // </>

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