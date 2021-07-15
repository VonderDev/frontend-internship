import { Col, Row } from 'antd';
import { BoardCard, RowStyled, HistoryImage, CardText, HistoryText, CommentIcon, HeartIcon, LinkMoreResult, TextTopic2 } from 'components/pages/Profile/shared/Profile.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface CardComponentProps {
    profile: any;

}
const ProfileBoardCard: React.FC<CardComponentProps> = ({ profile }) => {
    const history = useHistory();
    return (
        <>
            <RowStyled>
                <Col span={16}>
                    <TextTopic2>กระทู้ของคุณ</TextTopic2>
                </Col>
                <Col span={8}>
                    <LinkMoreResult onClick={() => history.push('/boardhistory')}>ดูเพิ่มเติม</LinkMoreResult>
                </Col>
            </RowStyled>
            {profile?.contents.map((item: any, index: any) => {
                return (
                    <BoardCard
                        key={index}
                        onClick={() => {
                            history.push('/Board');
                        }}
                    >
                        <RowStyled>
                            <Col span={7}>
                                <HistoryImage src={item.image} />
                            </Col>
                            <Col span={17}>
                                <CardText>
                                    <Row>
                                        <HistoryText>{item.title}</HistoryText>
                                    </Row>
                                    <Row>
                                        <HistoryText>{item.content_body}</HistoryText>
                                    </Row>
                                    <Row>
                                        <Col span={2}>
                                            <CommentIcon />
                                        </Col>
                                        <Col span={10}>
                                            <HistoryText>{item.author_username}</HistoryText>
                                        </Col>
                                        <Col span={8}>
                                            <HistoryText>{item.created_at}</HistoryText>
                                        </Col>
                                        <Col span={2}>
                                            <HeartIcon />
                                        </Col>
                                        <Col span={2}>
                                            <HistoryText>{item.likes}</HistoryText>
                                        </Col>
                                    </Row>
                                </CardText>
                            </Col>
                        </RowStyled>
                    </BoardCard>
                );
            })}
        </>
    );
};
export default ProfileBoardCard;
