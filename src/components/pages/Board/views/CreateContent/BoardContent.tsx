import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ButtonBackToFirstPage } from '../../shared/style/BoardCreate.styled';
import { LeftOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import {
    AuthorName,
    BoxOfLikeAndComment,
    CategoryTag,
    ContainerBaordContent,
    ContainerUserNameAndDate,
    ContentBody,
    DateCreatedContent,
    ImageOfContent,
    LengthOfLikeAndComment,
    ProfileImage,
    TextTitleContent,
    TopicTag,
} from '../../shared/style/BoardContent.styled';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
import { ApiPutLikeOfBoardContent } from '../../apis/boardCreate.api';
import { transalateToThai } from 'utils/transalator/transalator';
import { dateFormat } from 'utils/Date/DateFormat';
import ErrorPage from 'shared/errorPage/ErrorPage';

function BoardContent() {
    const history = useHistory();
    const paramObjectId = useParams<{ id: string }>();

    //----------------- SET STATE LIKE & PUT LIKE OF CONTENT -----------------//
    const [addLike, setAddLike] = useState<{ content_id: string }>({
        content_id: '',
    });
    const [isLike, setIsLike] = useState(false);
    const [likeLength, setLikeLength] = useState(0);

    useEffect(() => {
        setAddLike({
            ...addLike,
            content_id: paramObjectId.id,
        });
        console.log('add Like :', addLike);
    }, []);

    //--------------- FETCHING BOARD CONTENT & COMMENT DATA  ---------------//
    const { data: contentData, error: errorcontentData, mutate: updateContentData } = useSWR('/user/contentID/' + paramObjectId.id);
    const { data: fetchingCommentData, error: errorfetchingComment } = useSWR(`/user/comment/get/1-100/${paramObjectId.id}`);
    const isLoadingContentData = !contentData && !errorcontentData;

    //------------------- GET USERNAME FOR CHECK LIKE -------------------//
    const { getUser } = useAuthContext();
    const [userId, setUserId] = useState('');

    const getUserId = async () => {
        const token = localStorage.getItem('token');
        const response = await getUser();
        if (token) {
            if (response) {
                setUserId(response._id);
            } else {
                console.log('error');
            }
        } else {
            console.log('No token');
        }
    };

    async function addLikeOfBoardContent() {
        const isSuccess = await ApiPutLikeOfBoardContent(addLike);
        await updateContentData();
        if (isSuccess) {
            setIsLike(true);
            setLikeLength(likeLength + 1);
        }
    }
    async function unLikeOfBoardContent() {
        const isUnlikeSuccess = await ApiPutLikeOfBoardContent(addLike);
        if (isUnlikeSuccess) {
            setIsLike(false);
            setLikeLength(likeLength - 1);
        }
    }

    useEffect(() => {
        getUserId();
        if (contentData) {
            console.log('[Newest Content data ]', contentData);
            //---------------- CHECK LIKE IF LIKE IS SET TRUE OR NOT IS FALSE ----------------//
            const uidLikes = contentData?.uid_likes;
            console.log('[uid likes :]', uidLikes.includes(userId));
            setIsLike(uidLikes.includes(userId));
            setLikeLength(contentData?.uid_likes.length);
        }
    }, [contentData, userId]);

    return (
        <Container
            header={{
                title: 'กระทู้',
                right: 'menu',
                left: 'back',
                // (
                //     <ButtonBackToFirstPage
                //         onClick={() => {
                //             history.push('/');
                //             const tokenGuest = localStorage.getItem('tokenGuest');
                //             if (tokenGuest) {
                //                 localStorage.removeItem('tokenGuest');
                //             }
                //         }}
                //     >
                //         <LeftOutlined style={{ color: '#8a8888' }} />
                //     </ButtonBackToFirstPage>
                // ),
            }}
        >
            {errorcontentData && errorfetchingComment && <ErrorPage />}
            {isLoadingContentData ? (
                <div>loading ...</div>
            ) : (
                <ContainerBaordContent>
                    <TextTitleContent>{contentData?.title}</TextTitleContent>
                    <TopicTag>{transalateToThai(contentData?.content_type)}</TopicTag>
                    {contentData?.tag?.map((item: any, index: any) => {
                        return <CategoryTag key={index}>#{transalateToThai(item)}</CategoryTag>;
                    })}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', marginTop: '10px' }}>
                        <ProfileImage />
                        <ContainerUserNameAndDate>
                            <AuthorName>{contentData?.author_username}</AuthorName>
                            <DateCreatedContent>{dateFormat(contentData?.created_at)}</DateCreatedContent>
                        </ContainerUserNameAndDate>
                    </div>
                    <ImageOfContent src={contentData?.image}></ImageOfContent>
                    <ContentBody>{contentData?.content_body}</ContentBody>

                    <BoxOfLikeAndComment>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {isLike ? (
                                <HeartFilled style={{ color: '#F0685B', fontSize: '40px' }} onClick={unLikeOfBoardContent} />
                            ) : (
                                <HeartOutlined style={{ color: '#3A8CE4', fontSize: '40px' }} onClick={addLikeOfBoardContent} />
                            )}
                            <LengthOfLikeAndComment>{likeLength}</LengthOfLikeAndComment>
                        </span>
                        <span
                            style={{ display: 'flex', alignItems: 'center' }}
                            onClick={() => {
                                if (paramObjectId) {
                                    history.push(`/boardcontent/${paramObjectId?.id}/comment`);
                                }
                            }}
                        >
                            <CommentOutlined style={{ color: '#3A8CE4', fontSize: '40px' }} />
                            <LengthOfLikeAndComment>{fetchingCommentData?.length}</LengthOfLikeAndComment>
                        </span>
                    </BoxOfLikeAndComment>
                </ContainerBaordContent>
            )}
        </Container>
    );
}

export default BoardContent;
