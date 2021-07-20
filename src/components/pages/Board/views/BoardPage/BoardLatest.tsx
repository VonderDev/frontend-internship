import Container from "components/Container/Container";
import { useHistory } from 'react-router-dom';
import { LoadingOutlined } from "@ant-design/icons";
import useSWR from "swr";
import { Spin } from 'antd';
import {
    BoardCard,
    CommentIcon,
    EllipsisText,
    HistoryImage,
    HistoryText,
    HeartIcon
} from "../../shared/style";
import { Box } from 'shared/style/theme/component';
import { transalateToThai } from 'utils/transalator/transalator';

const BoardLatest = () => {

    const { data, error } = useSWR('/user/content/get');
    const isLoading = !data && !error;
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const history = useHistory();

    if (data) {
        data?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
    }

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'ล่าสุด' }} >
            {isLoading ? (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding : '10% 0% 10% 0%' }}>
                        <Spin indicator={antIcon} tip="Loading..." />
                    </div>
                </div>
            ) : (
                <>
                    {data?.map((item: any, index: any) => {
                        const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
                        const cardDate = new Date(item?.created_at);
                        const dateFormat = cardDate.getDate() + months[cardDate.getMonth()] + cardDate.getFullYear();
                        return (
                            <BoardCard
                                key={index}
                                onClick={() => {
                                    history.push(`/boardcontent/${item._id}`);
                                }}
                            >
                                <EllipsisText style={{ display: 'flex' }}>
                                    <HistoryImage src={item.image} />
                                    <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '20%' }}>
                                        <HistoryText style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</HistoryText>
                                        <Box direction="row" justify="flex-start" align="flex-start">
                                            <HistoryText style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--Gray-400)' }}>บทความ</HistoryText>
                                            {item?.tag?.map((item: any, index: any) => {
                                                return (
                                                    <HistoryText style={{ fontSize: '12px', paddingRight: '10px', color: 'var(--Gray-400)' }} key={index}>
                                                        #{transalateToThai(item)}
                                                    </HistoryText>
                                                );
                                            })}
                                        </Box>
                                        <Box direction="row" justify="space-between" align="flex-start" style={{ fontSize: '12px', color: '#6E7282', marginTop: '10px' }}>
                                            <div style={{ justifyContent: 'center' }}>
                                                <CommentIcon />
                                            </div>
                                            <HistoryText>{item.author_username}</HistoryText>
                                            <HistoryText>{dateFormat}</HistoryText>
                                            <div style={{ justifyContent: 'center' }}>
                                                <HeartIcon />
                                            </div>
                                            <HistoryText>{item.uid_likes.length}</HistoryText>
                                        </Box>
                                    </Box>
                                </EllipsisText>
                            </BoardCard>
                        );
                    })}
                </>
            )}
        </Container>
    )
}

export default BoardLatest;