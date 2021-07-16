import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentBody, CommentInput, ContainerOfCommentList, CreatedDate, IconSendMessage, ProfileUserImage } from '../../shared/style/CommentPage.styled';
import { ApiPostComment } from '../../apis/commentContent.api';
import useSWR from 'swr';
import CommentList from './CommentList';
import { IComment } from '../../shared/interface/Comment.interface';

function CommentOfContent() {
    const paramObjectId = useParams<{ id: string }>();
    useEffect(() => {
        console.log('[useParams : obejctID]:', paramObjectId);
    }, []);

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

    useEffect(() => {
        console.log('[Comment Data] :', commentData);
    }, [commentData]);

    function postComment() {
        ApiPostComment(commentData);
        const newComment = { comment: commentData };
        setCommentList([...commentList, newComment]);
        setCommentData({
            comment_body: '',
            content_id: '',
        });
    }

    const deleteComment = (commentToDelete: string): void => {
        setCommentList(
            commentList.filter((commentContent: any) => {
                return commentContent.comment_body != commentToDelete;
            }),
        );
    };

    //------------------- FETCHING COMMENT DATA USING SWR -------------------//
    const { data: fetchingCommentData, error: errorfetchingComment } = useSWR(`/user/comment/get/1-100/${paramObjectId.id}`);
    const isLoadingCommentData = !fetchingCommentData && !errorfetchingComment;
    console.log('[Comment of content_id] :', fetchingCommentData);

    //--------------- SET DATE CREATED CONTENT FORMAT ---------------//
    const [dateCreatedFormat, setDateCreatedFormat] = useState<string>();

    useEffect(() => {
        if (fetchingCommentData) {
            //--------------- SET DATE FORMAT ---------------//
            const dateCreatedContent = fetchingCommentData.map((key: { created_at: any }) => key.created_at);
            const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
            const createdConmmentData = new Date('2021-07-15T06:44:18.661Z');
            setDateCreatedFormat(createdConmmentData.getDate() + ' ' + months[createdConmmentData.getMonth()] + ' ' + createdConmmentData.getFullYear());
            console.log('[Date posted comment] :', dateCreatedContent);
            console.log('create Comment date', createdConmmentData);
            console.log('[Date format complete] =', dateCreatedFormat);
        }
    }, [fetchingCommentData, dateCreatedFormat]);

    return (
        <Container
            header={{
                title: 'ความคิดเห็น',
                right: 'menu',
                left: 'back',
            }}
        >
            {isLoadingCommentData ? (
                <div>loading ...</div>
            ) : (
                <ContainerOfCommentList>
                    {fetchingCommentData?.map((item: any, index: any) => {
                        return (
                            <div style={{ height: '15vh' }} key={index}>
                                <ProfileUserImage />
                                <CommentBody>
                                    <div>{item.username}</div>
                                    {item.comment_body}
                                </CommentBody>
                                <CreatedDate>{item.created_at}</CreatedDate>
                            </div>
                        );
                    })}
                </ContainerOfCommentList>
            )}
            {commentList.map((commentValue: IComment, key: number) => {
                return <CommentList key={key} commentContent={commentValue} deleteComment={deleteComment} />;
            })}
            <CommentInput type="text" placeholder="แสดงความคิดเห็นของคุณ..." name="comment_body" value={commentData.comment_body} onChange={handleChangeOfComment} />
            <IconSendMessage onClick={postComment} />
        </Container>
    );
}

export default CommentOfContent;
