import React, { useEffect, useState } from 'react';
import { Space, Spin, Card, Row, Col } from 'antd';
import useSWR from 'swr';
import { GridBox, 
  SearchField, 
  NewCardStyle, 
  HeartIconCard, 
  HeartText } from '../../shared/style';
import { FormOutlined, LoadingOutlined, CalendarOutlined } from '@ant-design/icons';
import { IIconText } from '../../shared/Card.interface';
import { useHistory } from 'react-router';

const { Meta } = Card;

const IconText = ({ icon, text }: IIconText) => (
  <SearchField>
    {React.createElement(icon)}
    {text}
  </SearchField>
);
export const CardTopTen = () => {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { data, error } = useSWR('/user/content/get');
  const isLoading = !data && !error;
  console.log('Card Top10 Data : ', data?.created_at);
  const history = useHistory();

  //--------------- SET DATE CREATED CONTENT FORMAT ---------------//
  // const [dateCreatedFormat, setDateCreatedFormat] = useState<string>();

  // useEffect(() => {
  //     if (contentData) {
  //         console.log('[Newest Content data ]', contentData);
  //         //--------------- SET DATE FORMAT ---------------//
  //         var dateCreatedContent = contentData?.created_at;
  //         const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  //         let createdContentData = new Date(dateCreatedContent);
  //         console.log(createdContentData);
  //         setDateCreatedFormat(createdContentData.getDate() + ' ' + months[createdContentData.getMonth()] + ' ' + createdContentData.getFullYear());
  //     }
  // }, [contentData, dateCreatedFormat]);

  return (
    <>
      {isLoading ? (
        <Spin indicator={antIcon} tip="Loading..." />
      ) : (
        <GridBox>
          <Space direction="horizontal" >
            {data?.slice(0, 10).map((item: any, index: any) => {
              return (
                <NewCardStyle typecard="Vertical" heightcard={350} key={index}
                  hoverable
                  onClick={() => history.push('/boardContent')}
                  cover={
                    <img alt="default"
                      src="https://s.keepmeme.com/files/en_posts/20200908/blurred-surprised-cat-meme-5b734a45210ef3b6657bcbe2831715fa.jpg"
                    />
                  }
                  actions={
                    [
                      <IconText icon={FormOutlined} text={item?.author_username} />,
                      <IconText icon={CalendarOutlined} text={item?.created_at} />,
                    ]
                  }
                >
                  <Meta title={item?.title} />
                  บทความ #{item?.tag}
                  <div>
                    <HeartIconCard />
                    <HeartText>
                      {item?.uid_likes.length}
                    </HeartText>
                  </div>
                </NewCardStyle>
              )
            })}
          </Space>
        </GridBox>
      )}
    </>
  )
}