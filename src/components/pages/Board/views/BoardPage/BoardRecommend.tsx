import Container from "components/Container/Container";
import { useHistory } from 'react-router-dom';
import useSWR from "swr";
import { Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";

const BoardRecommend = () => {

    const { data, error } = useSWR('/user/content/get');
    const isLoading = !data && !error;
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const history = useHistory();

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'แนะนำสำหรับคุณ' }} >
            {isLoading ? (
                <Spin indicator={antIcon} tip="Loading..." />
            ) : (
                <div>
                    แนะนำสำหรับคุณ
                </div>
            )}
        </Container>
    )
}

export default BoardRecommend;