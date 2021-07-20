import Container from 'components/Container/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    BoxOfCommentList,
    CommentBody,
    CommentInput,
    ContainerOfCommentList,
    ContainerOfInput,
    ContainerOfNoCommentList,
    CreatedDate,
    IconSendMessage,
    ProfileUserImage,
    Username,
} from '../../shared/style/CommentPage.styled';
import { ApiPostComment } from '../../apis/commentContent.api';
import useSWR from 'swr';
import CommentList from './CommentList';
import { IComment } from '../../shared/interface/Comment.interface';
import React from 'react';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import { BoxOfLikeAndComment } from '../../shared/style/BoardContent.styled';

function CommentOfContent() {
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
                <ContainerOfNoCommentList>ยังไม่มีความคิดเห็น</ContainerOfNoCommentList>
            ) : (
                <ContainerOfCommentList>
                    {commentList?.map((item: any, index: any) => {
                        const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
                        const dateCreatedComment = new Date(item.created_at);
                        const dateFormat = dateCreatedComment.getDate() + ' ' + months[dateCreatedComment.getMonth()] + ' ' + dateCreatedComment.getFullYear();
                        // console.log('[Date format] =', dateFormat);
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
                <CommentInput type="text" placeholder="แสดงความคิดเห็นของคุณ..." name="comment_body" value={commentData.comment_body} onChange={handleChangeOfComment} />
                <IconSendMessage onClick={postComment} />
            </ContainerOfInput>
        </Container>
    );
}

export default CommentOfContent;
