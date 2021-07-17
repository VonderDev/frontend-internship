import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentBody, CommentInput, ContainerOfCommentList, CreatedDate, IconSendMessage, ProfileUserImage, Username } from '../../shared/style/CommentPage.styled';
import { ApiPostComment } from '../../apis/commentContent.api';
import useSWR from 'swr';
import CommentList from './CommentList';
import { IComment } from '../../shared/interface/Comment.interface';
import React from 'react';

function CommentOfContent() {
    //---------------------- GET PARAM OBJECT URL ----------------------//
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
        setCommentList([...commentList, commentData]);
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

    useEffect(() => {
        if (fetchingCommentData) {
            setCommentList([...commentList, commentData]);
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
            {isLoadingCommentData ? (
                <div>loading ...</div>
            ) : (
                <ContainerOfCommentList>
                    {fetchingCommentData?.map((item: any, index: any) => {
                        const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
                        const dateCreatedComment = new Date(item.created_at);
                        const dateFormat = dateCreatedComment.getDate() + ' ' + months[dateCreatedComment.getMonth()] + ' ' + dateCreatedComment.getFullYear();
                        console.log('[Date format] =', dateFormat);
                        return (
                            <div style={{ height: '15vh' }} key={index}>
                                <ProfileUserImage />
                                <CommentBody>
                                    <Username>{item.username}</Username>
                                    {item.comment_body}
                                </CommentBody>
                                <CreatedDate>{dateFormat}</CreatedDate>
                            </div>
                        );
                    })}
                </ContainerOfCommentList>
            )}
            {/* {commentList.map((commentData: any, index: any) => {
                return <CommentList key={index} commentData={commentData} deleteComment={deleteComment} />;
            })} */}
            <CommentInput type="text" placeholder="แสดงความคิดเห็นของคุณ..." name="comment_body" value={commentData.comment_body} onChange={handleChangeOfComment} />
            <IconSendMessage onClick={postComment} />
        </Container>
    );
}

export default CommentOfContent;
