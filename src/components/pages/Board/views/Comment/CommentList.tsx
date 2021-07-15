import { IComment } from '../../shared/interface/Comment.interface';
import { ButtonDelete, CommentBody, ContainerOfCommentList, ProfileUserImage } from '../../shared/style/CommentPage.styled';

interface CommentProps {
    commentContent: IComment;
    deleteComment(taskNameToDelete: string): void;
}

const CommentList = ({ commentContent, deleteComment }: CommentProps) => {
    return (
        <ContainerOfCommentList>
            <ProfileUserImage />

            <CommentBody>{commentContent.comment_body}</CommentBody>
            <ButtonDelete
                onClick={() => {
                    deleteComment(commentContent.comment_body);
                }}
            >
                X
            </ButtonDelete>
        </ContainerOfCommentList>
    );
};

export default CommentList;
