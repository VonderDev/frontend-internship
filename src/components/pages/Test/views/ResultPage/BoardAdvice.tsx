import { Row, Card, Col } from 'antd';
import { IIconText } from 'components/pages/Home/shared/home.interface';
import { ButtonSeeAllBoard, SearchField, TextBoard } from 'components/pages/Home/shared/homepage.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ImgResultRecommentBoard from '../../shared/images/ResultRecommentBoard.png';
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
    const { Meta } = Card;

    return (
        <>
            <Row>
                <TextBoard xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    แนะนำสำหรับคุณ
                </TextBoard>
                <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
            </Row>
            <ContainerBoard>
                <Row gutter={16}>
                    <Col span={12}>
                        <BoardRecomment hoverable style={{ width: 240 }} cover={<img alt="example" src={ImgResultRecommentBoard} />}>
                            <CardTag title="วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัว" description="บทความ #ตรรกะ  #มิติสัมพันธ์" />
                            <RowDetailCard>
                                <IconText icon={FormOutlined} text="Lookmaii" key="list-vertical-star-o" />
                                <TextDateBoard>11 มิถุนายน 2564</TextDateBoard>
                            </RowDetailCard>
                        </BoardRecomment>
                    </Col>
                    <Col span={12}>
                        <BoardRecomment hoverable style={{ width: 240 }} cover={<img alt="example" src={ImgResultRecommentBoard} />}>
                            <Meta title="วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัว" description="บทความ #ตรรกะ  #มิติสัมพันธ์" />
                            <RowDetailCard>
                                <IconText icon={FormOutlined} text="Lookmaii" key="list-vertical-star-o" />
                                <TextDateBoard>11 มิถุนายน 2564</TextDateBoard>
                            </RowDetailCard>
                        </BoardRecomment>
                    </Col>
                </Row>
            </ContainerBoard>
        </>
    );
};

export default BoardAdvice;
