import { useHistory } from 'react-router-dom';
import { ButtonBackToHomePage, ButtonRefreshPage, ContainerOfErrorPage, ErrorPageImg, TextDescriptionError, TextErrorTopic } from './ErrorPage.styled';

function ErrorPage() {
    const history = useHistory();

    return (
        <>
            <ContainerOfErrorPage>
                <ErrorPageImg /> <TextErrorTopic>ขออภัยมีบางอย่างผิดปกติ</TextErrorTopic>
                <TextDescriptionError>ดูเหมือนว่าจะมีข้อผิดพลาดเกิดขึ้น</TextDescriptionError>
                <TextDescriptionError>โปรดลองใหม่อีกครั้ง</TextDescriptionError>
                <ButtonRefreshPage onClick={() => location.reload()}>ลองอีกครั้ง</ButtonRefreshPage>
                <ButtonBackToHomePage onClick={() => history.push('/')}>กลับหน้าหลัก</ButtonBackToHomePage>
            </ContainerOfErrorPage>
        </>
    );
}

export default ErrorPage;
