import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    BoxOfCommentList,
    CommentBody,
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
import { MONTHS } from '../../shared/months';

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
    const { data: fetchingCommentData, error: errorfetchingComment } = useSWR(`/user/comment/get/1-100/${paramObjectId.id}`);

    //------------------- GET USERNAME FOR SHOW WHEN POST COMMENT SUCCESS -------------------//
    const { getUser } = useAuthContext();
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
        // console.log('[new Comment]', newComment);
        newComment.username = username;
        commentList.push(newComment);
        setCommentData({
            comment_body: '',
            content_id: '',
        });
    }

    useEffect(() => {
        getUserInfo();
        if (fetchingCommentData) {
            setCommentList(fetchingCommentData);
        }
    }, [fetchingCommentData]);

    return (
        <Container
            header={{
                title: 'ความคิดเห็น',
                right: 'menu',
                left: 'back',
            }}
        >
            {commentList.length == 0 ? (
                <ContainerOfIconQuestionAndText style={{ position: 'relative' }}>
                    <div style={{display:'flex' , alignItems:'center' , flexDirection:'column' , height:'78vh' , justifyContent:'center'}}> 
                    <QuestionImgae />
                    <TextNoCommentList>ยังไม่มีความคิดเห็นในขณะนี้</TextNoCommentList>
                    </div>
                </ContainerOfIconQuestionAndText>
            ) : (
                <ContainerOfCommentList>
                    {commentList?.map((item: any, index: any) => {
                        const dateCreatedComment = new Date(item.created_at);
                        const dateFormat = dateCreatedComment.getDate() + ' ' + MONTHS[dateCreatedComment.getMonth()] + ' ' + dateCreatedComment.getFullYear();
                        return (
                            <BoxOfCommentList style={{ height: '15vh' }} key={index}>
                                <ProfileUserImage />
                                <CommentBody>
                                    <Username>{item?.username}</Username>
                                    {item.comment_body}
                                </CommentBody>
                                <CreatedDate>{dateFormat}</CreatedDate>
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
                        <IconSendMessage />
                    </>
                ) : (
                    <>
                        <CommentInput type="text" placeholder="แสดงความคิดเห็นของคุณ..." name="comment_body" value={commentData.comment_body} onChange={handleChangeOfComment} />
                        <IconSendMessage onClick={postComment} />
                    </>
                )}
            </ContainerOfInput>
        </Container>
    );
}

export default CommentOfContent;
