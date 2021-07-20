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
import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
import { ApiPutLikeOfBoardContent } from '../../apis/boardCreate.api';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import { transalateToThai } from 'utils/transalator/transalator';
import { MONTHS } from '../../shared/months';

function BoardContent() {
    const history = useHistory();
    const paramObjectId = useParams<{ id: string }>();
    //--------------- FETCHING BOARD CONTENT USING AXIOS ---------------//
    // async function getNewestContent() {
    //     const response = await ApiGetNewestContent();
    //     if (response) {
    //         console.log(response);
    //     } else {
    //         console.log('error');
    //     }
    // }

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

    async function addLikeOfBoardContent() {
        const isLikeSuccess = await ApiPutLikeOfBoardContent(addLike);
        if (isLikeSuccess) {
            setIsLike(true);
            setLikeLength(likeLength + 1);
        }
    }

    //--------------- FETCHING BOARD CONTENT & COMMENT DATA  ---------------//
    const { data: contentData, error: errorcontentData } = useSWR('/user/contentID/' + paramObjectId.id);
    const { data: fetchingCommentData, error: errorfetchingComment } = useSWR(`/user/comment/get/1-100/${paramObjectId.id}`);

    const isLoadingContentData = !contentData && !errorcontentData;

    //--------------- SET DATE CREATED CONTENT FORMAT ---------------//
    const [dateCreatedFormat, setDateCreatedFormat] = useState<string>();

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
            console.log('none');
        }
    };

    useEffect(() => {
        getUserId();
        if (contentData) {
            console.log('[Newest Content data ]', contentData);
            //--------------- SET DATE FORMAT ---------------//
            const dateCreatedContent = contentData?.created_at;
            const createdContentData = new Date(dateCreatedContent);
            setDateCreatedFormat(createdContentData.getDate() + ' ' + MONTHS[createdContentData.getMonth()] + ' ' + createdContentData.getFullYear());
            //---------------- CHECK LIKE IF LIKE IS SET TRUE OR NOT IS FALSE ----------------//
            const uidLikes = contentData?.uid_likes;
            console.log('[uid likes :]', uidLikes.includes(userId));
            setIsLike(uidLikes.includes(userId));
            setLikeLength(contentData?.uid_likes.length);
        }
    }, [contentData, dateCreatedFormat, userId]);

    return (
        <Container
            header={{
                title: 'กระทู้',
                right: 'menu',
                left: (
                    <ButtonBackToFirstPage onClick={() => history.push('/')}>
                        <LeftOutlined style={{ color: '#8a8888' }} />
                    </ButtonBackToFirstPage>
                ),
            }}
        >
            {isLoadingContentData ? (
                <div>loading ...</div>
            ) : (
                <ContainerBaordContent>
                    <TextTitleContent>{contentData?.title}</TextTitleContent>
                    <TopicTag>{transalateToThai(contentData?.content_type)}</TopicTag>
                    {contentData?.tag?.map((item: any, index: any) => {
                        return <CategoryTag key={index}>#{transalateToThai(item)}</CategoryTag>;
                    })}
                    <ProfileImage />
                    <ContainerUserNameAndDate>
                        <AuthorName>{contentData?.author_username}</AuthorName>
                        <DateCreatedContent>{dateCreatedFormat}</DateCreatedContent>
                    </ContainerUserNameAndDate>
                    <ImageOfContent src={contentData?.image}></ImageOfContent>
                    <ContentBody>{contentData?.content_body}</ContentBody>

                    <BoxOfLikeAndComment>
                        {isLike ? <HeartFilled style={{ color: '#F0685B', fontSize: '40px' }} /> : <HeartOutlined style={{ color: '#3A8CE4', fontSize: '40px' }} onClick={addLikeOfBoardContent} />}
                        <LengthOfLikeAndComment>{likeLength}</LengthOfLikeAndComment>
                        <span
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
