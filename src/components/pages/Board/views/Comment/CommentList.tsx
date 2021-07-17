import { IComment } from '../../shared/interface/Comment.interface';
import { ButtonDelete, CommentBody, ContainerOfCommentList, ProfileUserImage, ProfileUserImageCommentList } from '../../shared/style/CommentPage.styled';

interface CommentProps {
    commentData: IComment;
    deleteComment(taskNameToDelete: string): void;
}

const CommentList = ({ commentData, deleteComment }: CommentProps) => {
    return (
        <ContainerOfCommentList>
            <ProfileUserImageCommentList />
            <CommentBody>{commentData.comment_body}</CommentBody>
            <ButtonDelete
                onClick={() => {
                    deleteComment(commentData.comment_body);
                }}
            >
                X
            </ButtonDelete>
        </ContainerOfCommentList>
    );
};

export default CommentList;
