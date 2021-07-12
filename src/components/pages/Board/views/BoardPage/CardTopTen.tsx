import { Space, Spin } from 'antd';
import { useEffect } from 'react';
import { CardStyle } from 'shared/style/theme/component';
import useSWR from 'swr';
import { GridBox } from '../../shared/style';
import { LoadingOutlined } from '@ant-design/icons';

export const CardTopTen = () => {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { data, error } = useSWR('/user/content/get');
  const isLoading = !data && !error;
  console.log('Card Top10 Data', data);

  useEffect(() => {
    if (data) {
      console.log('[useEffect card title] :', data.title);
      console.log('[useEffect card image] :', data.image);
      console.log('[useEffect card tag] :', data.tag);
      console.log('[useEffect card image] :', data.author_username);
    }
  }, [data])

  return (
    <GridBox>
      {error && <div>error</div>}
      {isLoading ? (
        <Spin indicator={antIcon} />
      ) : (
        <Space direction="horizontal">
          <div>
            <CardStyle typecard="Vertical" heightcard={300}
              cover={
                <img alt="example" src="" />
              }
            >
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
      )}
    </GridBox>
  )
}