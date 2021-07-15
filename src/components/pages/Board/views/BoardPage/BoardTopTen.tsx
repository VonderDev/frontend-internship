import Container from "components/Container/Container";
import { useHistory } from 'react-router-dom';
import { LoadingOutlined } from "@ant-design/icons";
import useSWR from "swr";
import { Spin, Col, Row } from 'antd';
import {
    BoardCard,
    CardText,
    CommentIcon,
    HeartIconList,
    HistoryImage,
    HistoryText,
    RowStyled,
} from "../../shared/style";

const BoardTopTen = () => {

    const { data, error } = useSWR('/user/content/get');
    const isLoading = !data && !error;
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const history = useHistory();

    return (
        <Container header={{ left: 'back', right: 'menu', title: '10 อันดับสูงสุด' }} >
            {isLoading ? (
                <Spin indicator={antIcon} tip="Loading..." />
            ) : (
                <>
                    {data?.slice(0, 10).map((item: any, index: any) => {
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
                                                    <HeartIconList />
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
            )}
        </Container>
    )
}

export default BoardTopTen;