import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    BoxOfCommentList,
    CommentBody,
    CommentGray,
    CommentInput,
    ContainerOfCommentList,
    ContainerOfIconQuestionAndText,
    ContainerOfInput,
    CreatedDate,
    IconSendMessage,
    LoginText,
    ProfileUserImage,
    QuestionImgae,
    TextNoCommentList,
    Username,
} from '../../shared/style/CommentPage.styled';
import { ApiPostComment } from '../../apis/commentContent.api';
import useSWR from 'swr';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import { dateFormat } from 'utils/Date/DateFormat';
import ErrorPage from 'shared/errorPage/ErrorPage';
import { ButtonBackToFirstPage, ButtonCancleModal, ButtonExistModal, ModalContainer, TextBodyModal, TextTitleModal } from '../../shared/style/BoardCreate.styled';
import { LeftOutlined } from '@ant-design/icons';

function CommentOfContent() {
    const history = useHistory();
    //---------------------- GET PARAM OBJECT URL ----------------------//
    const paramObjectId = useParams<{ id: string }>();
    //---------------------- SET STATE & FUNCTION FOR POST COMMENT ----------------------//
    const [commentData, setCommentData] = useState<{ comment_body: string; content_id: string }>({
        comment_body: '',
        content_id: '',
    });
    const [commentList, setCommentList] = useState<any>([]);

    const handleChangeOfComment = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentData({
            ...commentData,
            [event.target.name]: event.target.value,
            content_id: paramObjectId.id,
        });
    };

    //------------------- FETCHING COMMENT DATA USING SWR -------------------//
    const { data: fetchingCommentData, error: errorfetchingComment, mutate: updateComment } = useSWR(`/user/comment/get/1-100/${paramObjectId.id}`);

    //------------------- GET USERNAME FOR SHOW WHEN POST COMMENT SUCCESS -------------------//
    const { getUser, user } = useAuthContext();
    const [username, setUsername] = useState('');
    const token = localStorage.getItem('token');

    const getUserInfo = async () => {
        const token = localStorage.getItem('token');
        const response = await getUser();
        if (token) {
            if (response) {
                setUsername(response.username);
                console.log('user name', username);
            } else {
                console.log('error');
            }
        } else {
            console.log('no username found');
        }
    };
    //-------------------- POST COMMENT FUNCTION --------------------//
    async function postComment() {
        const newComment = await ApiPostComment(commentData);
        await updateComment();
        console.log('[new Comment]', newComment);
        newComment.username = username;
        commentList.push(newComment);
        setCommentData({
            comment_body: '',
            content_id: '',
        });
    }

    useEffect(() => {
        getUserInfo();
        console.log('[Comment Data]', commentData);
        if (fetchingCommentData) {
            setCommentList(fetchingCommentData);
        }
    }, [fetchingCommentData, commentData]);

    //--------------------- SET MODAL STATE ---------------------//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk = () => {
        history.goBack();
        setIsModalVisible(false);
    };
    return (
        <>
            <ModalContainer
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                title={<TextTitleModal>ออกจากหน้านี้?</TextTitleModal>}
                footer={[
                    <ButtonExistModal key="back" onClick={handleOk}>
                        ออก
                    </ButtonExistModal>,
                    <ButtonCancleModal key="submit" onClick={handleCancel}>
                        ยกเลิก
                    </ButtonCancleModal>,
                ]}
            >
                <TextBodyModal>ความคิดเห็นของคุณจะไม่ถูกบันทึก</TextBodyModal>
            </ModalContainer>
            <Container
                header={{
                    title: 'ความคิดเห็น',
                    right: 'menu',
                    left: (
                        <>
                            {commentData.comment_body != '' ? (
                                <ButtonBackToFirstPage onClick={showModal}>
                                    <LeftOutlined style={{ color: '#8a8888' }} />
                                </ButtonBackToFirstPage>
                            ) : (
                                <ButtonBackToFirstPage onClick={() => history.push('/')}>
                                    <LeftOutlined style={{ color: '#8a8888' }} />
                                </ButtonBackToFirstPage>
                            )}
                        </>
                    ),
                }}
            >
                {errorfetchingComment && <ErrorPage />}
                {fetchingCommentData?.length == 0 ? (
                    <ContainerOfIconQuestionAndText style={{ position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '78vh', justifyContent: 'center' }}>
                            <QuestionImgae />
                            <TextNoCommentList>ยังไม่มีความคิดเห็นในขณะนี้</TextNoCommentList>
                        </div>
                    </ContainerOfIconQuestionAndText>
                ) : (
                    <ContainerOfCommentList>
                        {fetchingCommentData?.map((item: any, index: any) => {
                            return (
                                <BoxOfCommentList style={{ height: '15vh' }} key={index}>
                                    <ProfileUserImage />
                                    <CommentBody>
                                        <Username>{item?.username}</Username>
                                        {item.comment_body}
                                    </CommentBody>
                                    <CreatedDate>{dateFormat(item?.created_at)}</CreatedDate>
                                </BoxOfCommentList>
                            );
                        })}
                    </ContainerOfCommentList>
                )}
                <ContainerOfInput>
                    {!token ? (
                        <>
                            <CommentInput type="text" placeholder="กรุณา เข้าสู่ระบบ เพื่อเเสดงความคิดเห็น" disabled={true} />
                            <LoginText onClick={() => history.push('/login')}>เข้าสู่ระบบ</LoginText>
                            <CommentGray />
                        </>
                    ) : (
                        <div>
                            <CommentInput type="text" placeholder="แสดงความคิดเห็นของคุณ..." name="comment_body" value={commentData.comment_body} onChange={handleChangeOfComment} />
                            {commentData.comment_body != '' ? <IconSendMessage onClick={postComment} /> : <CommentGray />}
                        </div>
                    )}
                    {Object.keys(commentData).length ? <div>sdssssss</div> : null}
                </ContainerOfInput>
            </Container>
        </>
    );
}

export default CommentOfContent;
