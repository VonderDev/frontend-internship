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

            <CommentBody>{commentContent.comment}</CommentBody>
            <ButtonDelete
                onClick={() => {
                    deleteComment(commentContent.comment);
                }}
            >
                X
            </ButtonDelete>
        </ContainerOfCommentList>
    );
};

export default CommentList;
