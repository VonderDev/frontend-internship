import React, { useEffect } from 'react';
import { Space, Spin, Card } from 'antd';
import { CardStyle } from 'shared/style/theme/component';
import useSWR from 'swr';
import { GridBox, ScrollCard, SearchField } from '../../shared/style';
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
  console.log('Card Top10 Data : ', data);
  const history = useHistory();

  useEffect(() => {

  }, [])

  return (
    <>
      {isLoading ? (
        <Spin indicator={antIcon} tip="Loading..." />
      ) : (
        <GridBox>
          <Space direction="horizontal">
            {data?.slice(0, 10).map((item: any, index: any) => {
              return (
                <CardStyle typecard="Vertical" heightcard={200} key={index}
                  hoverable
                  onClick={() => history.push('/boardContent')}
                  cover={
                    <img alt="default"
                      src="https://s.keepmeme.com/files/en_posts/20200908/blurred-surprised-cat-meme-5b734a45210ef3b6657bcbe2831715fa.jpg" />
                  }
                  actions={
                    [
                      <IconText icon={FormOutlined} text={item.author_username} />,
                      <IconText icon={CalendarOutlined} text="date" />,
                    ]
                  }
                >
                  <Meta title={item.title} />
                  บทความ #{item.tag}
                </CardStyle>
              )
            })}
          </Space>
        </GridBox>
      )}
    </>
  )
}