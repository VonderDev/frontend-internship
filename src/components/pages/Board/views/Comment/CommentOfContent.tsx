import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentInput, IconSendMessage } from '../../shared/style/CommentPage.styled';
import TodoTask from './CommentList';
import { IComment } from '../../shared/interface/Comment.interface';

function CommentOfContent() {
    const paramObjectId = useParams<{ id: string }>();
    useEffect(() => {
        console.log('[useParams : obejctID]:', paramObjectId);
    }, []);

    //---------------------- SET STATE & FUNCTION FOR POST COMMENT ----------------------//
    const [comment, setComment] = useState<string>('');
    const [commentList, setCommentList] = useState<IComment[]>([]);

    const handleChangeOfComment = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'comment') {
            setComment(event.target.value);
        }
    };

    const addComment = (): void => {
        const newComment = { comment: comment };
        setCommentList([...commentList, newComment]);
        setComment('');
    };

    const deleteComment = (commentToDelete: string): void => {
        setCommentList(
            commentList.filter((commentContent) => {
                return commentContent.comment != commentToDelete;
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
            <IconSendMessage onClick={addComment} />
            <CommentInput placeholder="แสดงความคิดเห็นของคุณ..." name="comment" value={comment} onChange={handleChangeOfComment} />
        </Container>
    );
}

export default CommentOfContent;
