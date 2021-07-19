import React from 'react';
import { Spin, Card } from 'antd';
import useSWR from 'swr';
import { GridBox, 
  SearchField, 
  NewCardStyle, 
  HeartIconCard, 
  HeartText,
  CardTextData,
  SpaceCard,
  CoverImage } from '../../shared/style';
import { FormOutlined, LoadingOutlined, CalendarOutlined } from '@ant-design/icons';
import { IIconText } from '../../shared/Card.interface';
import { useHistory } from 'react-router';
import { transalateToThai } from 'utils/transalator/transalator';

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
  console.log('Card date : ', data?.created_at);
  const history = useHistory();

  return (
    <>
      {isLoading ? (
        <div style={{ display : 'flex', alignItems : 'center'}}>
          <Spin indicator={antIcon} tip="Loading..." />
        </div>
      ) : (
        <GridBox>
          <SpaceCard direction="horizontal" >
            {data?.slice(0, 10).map((item: any, index: any) => {
              const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
              const cardDate = new Date(item?.created_at);
              const dateFormat = cardDate.getDate() + months[cardDate.getMonth()] + cardDate.getFullYear();
              return (
                <NewCardStyle typecard="Vertical" heightcard={255} key={index}
                  hoverable
                  cover={
                    <CoverImage src={item?.image} style={{ borderRadius:'12px 12px 0 0'}} />
                  }
                  onClick={() => history.push('/boardContent')}
                  actions={
                    [
                      <IconText icon={FormOutlined} text={item?.author_username} />,
                      <IconText icon={CalendarOutlined} text={dateFormat} />,
                    ]
                  }
                >
                  <Meta title={item?.title} />
                  <CardTextData>บทความ <span style={{ fontWeight: 'normal'}} key={index}>#{transalateToThai(item?.tag)}</span></CardTextData>
                  <div>
                    <HeartIconCard />
                    <HeartText>
                      {item?.uid_likes.length}
                    </HeartText>
                  </div>
                </NewCardStyle>
              )
            })}
          </SpaceCard>
        </GridBox>
      )}
    </>
  )
}