import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentInput, IconSendMessage } from '../../shared/style/CommentPage.styled';
import TodoTask from './CommentList';
import { IComment } from '../../shared/interface/Comment.interface';
import { ApiPostComment } from '../../apis/commentContent.api';

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

    // const addComment = (): void => {
    //     const newComment = { comment: commentData };
    //     setCommentList([...commentList, newComment]);
    //     setCommentData({
    //         comment_body: '',
    //         content_id: '',
    //     });
    // };

    const deleteComment = (commentToDelete: string): void => {
        setCommentList(
            commentList.filter((commentContent: any) => {
                return commentContent.comment_body != commentToDelete;
            }),
        );
    };

    useEffect(() => {
        console.log('[Comment List]:', commentList);
    }, [commentList]);

    return (
        <Container
            header={{
                title: 'ความคิดเห็น',
                right: 'menu',
                left: 'back',
            }}
        >
            {commentList.map((commentValue: IComment, key: number) => {
                return <TodoTask key={key} commentContent={commentValue} deleteComment={deleteComment} />;
            })}
            <CommentInput type="text" placeholder="แสดงความคิดเห็นของคุณ..." name="comment_body" value={commentData.comment_body} onChange={handleChangeOfComment} />
            <IconSendMessage onClick={postComment} />
        </Container>
    );
}

export default CommentOfContent;
