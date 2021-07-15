import { IComment } from '../../shared/Comment.interface';

interface Props {
    commentContent: IComment;
    deleteComment(taskNameToDelete: string): void;
}

const TodoTask = ({ commentContent, deleteComment }: Props) => {
    return (
        <div>
            <span>{commentContent.comment}</span>
            <button
                onClick={() => {
                    deleteComment(commentContent.comment);
                }}
            >
                X
            </button>
        </div>
    );
};

export default TodoTask;
