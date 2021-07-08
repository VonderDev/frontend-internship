import { Box } from 'shared/style/theme/component';
import { BoardCard,
    RowStyled,
    HistoryImage,
    CardText,
    HistoryText,
    CommentIcon,
    HeartIcon
  } from '../../shared/style';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';

export const CardLatest = () => {

    const history = useHistory();
    const cardList = [
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
        { href: '/board', title: `วิศวะ สอบอะไรบ้าง? พร้อมเทคนิคเตรียมตัวในการสอบ`, avatar: 'https://s.isanook.com/ca/0/ud/278/1390705/1.jpg', description: 'บทความ', username: 'Bewveeraphat' },
      ];

    return (
        <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
        {cardList.map((item, index) => {
          return (
            <BoardCard
              key={index}
              onClick={() => {
                history.push('/Board');
              }}
            >
              <RowStyled>
                <Col span={7}>
                  <HistoryImage src={item.avatar} />
                </Col>
                <Col span={17}>
                  <CardText>
                    <Row>
                      <HistoryText>{item.title}</HistoryText>
                    </Row>
                    <Row>
                      <HistoryText>{item.description}</HistoryText>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <CommentIcon />
                      </Col>
                      <Col span={10}>
                        <HistoryText>{item.username}</HistoryText>
                      </Col>
                      <Col span={8}>
                        <HistoryText>25 มิ.ย. 2564</HistoryText>
                      </Col>
                      <Col span={2}>
                        <HeartIcon />
                      </Col>
                      <Col span={2}>
                        <HistoryText>12</HistoryText>
                      </Col>
                    </Row>
                  </CardText>
                </Col>
              </RowStyled>
            </BoardCard>
          );
        })}
      </Box>
    )
}