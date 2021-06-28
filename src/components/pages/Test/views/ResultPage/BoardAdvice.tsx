import { Row, Card, Col } from 'antd';
import { IIconText } from 'components/pages/Home/shared/home.interface';
import { ButtonSeeAllBoard, SearchField, TextBoardTopic } from 'components/pages/Home/shared/homepage.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { BoardRecomment, CardTag, ContainerBoard, RowDetailCard, TextDateBoard } from '../../shared/styles/ResultPage.styled';
import { FormOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);

const BoardAdvice = () => {
    const history = useHistory();
    const cardBoardRecommentList = [
        {
            title: 'How to เรียนภาษาให้เทพภายใน 3 เดือน',
            tag: 'บทความ #ภาษา  #มิติสัมพันธ์',
            date: '9 มิถุนายน 2564',
            author: 'Maneemena',
            imgCardBoard: 'https://sites.google.com/site/englishbydao99aaa/_/rsrc/1484476698203/hnwy-thi-4-kheiyn-xyangri-hi-thuk-khorngsrang/49.jpg',
        },
        {
            title: 'วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัว',
            tag: 'บทความ #ตรรกะ  #มิติสัมพันธ์',
            date: '11 มิถุนายน 2564',
            author: 'Lookmai',
            imgCardBoard: 'https://sites.google.com/site/englishbydao99aaa/_/rsrc/1484476698203/hnwy-thi-4-kheiyn-xyangri-hi-thuk-khorngsrang/49.jpg',
        },
    ];

    return (
        <>
            <Row>
                <TextBoardTopic xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    แนะนำสำหรับคุณ
                </TextBoardTopic>
                <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
            </Row>
            <ContainerBoard>
                {' '}
                {cardBoardRecommentList.map((item, index) => {
                    return (
                        <Row gutter={16} key={index}>
                            <Col span={12}>
                                <BoardRecomment hoverable style={{ width: 240 }} cover={<img alt="example" src={item.imgCardBoard} />}>
                                    <CardTag title={item.title} description={item.tag} />
                                    <RowDetailCard>
                                        <IconText icon={FormOutlined} text="Lookmaii" key="list-vertical-star-o" />
                                        <TextDateBoard>{item.date}</TextDateBoard>
                                    </RowDetailCard>
                                </BoardRecomment>
                            </Col>
                        </Row>
                    );
                })}
            </ContainerBoard>
        </>
    );
};

export default BoardAdvice;