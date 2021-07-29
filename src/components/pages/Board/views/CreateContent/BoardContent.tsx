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
    LengthOfLikeAndCommentSuccess,
    DefaultImage,
} from '../../shared/style/BoardContent.styled';
import { useAuthContext } from 'components/AuthContext/AuthContext';
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
                left: (
                    <ButtonBackToFirstPage
                        onClick={() => {
                            history.push('/');
                            const tokenGuest = localStorage.getItem('tokenGuest');
                            if (tokenGuest) {
                                localStorage.removeItem('tokenGuest');
                            }
                        }}
                    >
                        <LeftOutlined style={{ color: '#8a8888' }} />
                    </ButtonBackToFirstPage>
                ),
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

                    {contentData?.image !== '' ? <ImageOfContent src={contentData?.image} /> : <DefaultImage />}

                    <ContentBody>{contentData?.content_body}</ContentBody>

                    <BoxOfLikeAndComment>
                        <span style={{ display: 'flex', alignItems: 'center', transform: 'translateX(80px)' }}>
                            {isLike ? (
                                <div onClick={unLikeOfBoardContent} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.7129 5.10494L14.5224 6.19937L15.3247 5.09966C16.1124 4.01993 17.177 2.89045 18.3925 2.09412C19.6031 1.30105 20.8931 0.881349 22.1916 1.06582C25.7197 1.67022 28.1756 4.64161 27.9901 8.00109L27.99 8.00108L27.9896 8.01125C27.9212 9.53062 27.3022 10.7512 26.3531 11.9058C25.6036 12.8176 24.7015 13.6315 23.7267 14.511C23.4246 14.7836 23.1155 15.0625 22.8018 15.3525L22.8008 15.3534C21.4491 16.6066 20.0977 17.8725 18.7485 19.1363L18.7471 19.1376C17.3968 20.4024 16.0487 21.6652 14.701 22.9147L14.6935 22.9216L14.6862 22.9287C14.6452 22.9682 14.5772 23 14.4899 23C14.4025 23 14.3345 22.9682 14.2935 22.9287L14.287 22.9224L14.2804 22.9162L8.23398 17.2858C8.23382 17.2856 8.23365 17.2854 8.23348 17.2853C7.69928 16.7858 7.09861 16.2641 6.49897 15.7433C6.13714 15.429 5.77569 15.115 5.42943 14.8065C4.48023 13.9607 3.58101 13.1016 2.83896 12.1899C1.36965 10.3845 0.585679 8.46982 1.22572 6.12992L1.22577 6.12993L1.2282 6.12067C1.92985 3.45554 4.28079 1.39138 7.17812 1.01935C8.3935 0.899539 9.61058 1.34693 10.767 2.15054C11.9254 2.9555 12.9441 4.06559 13.7129 5.10494Z"
                                            fill="#F0685B"
                                            stroke="#F0685B"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <div onClick={addLikeOfBoardContent} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.7129 5.10494L14.5224 6.19937L15.3247 5.09966C16.1124 4.01993 17.177 2.89045 18.3925 2.09412C19.6031 1.30105 20.8931 0.881349 22.1916 1.06582C25.7197 1.67022 28.1756 4.64161 27.9901 8.00109L27.99 8.00108L27.9896 8.01125C27.9212 9.53062 27.3022 10.7512 26.3531 11.9058C25.6036 12.8176 24.7015 13.6315 23.7267 14.511C23.4246 14.7836 23.1155 15.0625 22.8018 15.3525L22.8008 15.3534C21.4491 16.6066 20.0977 17.8725 18.7485 19.1363L18.7471 19.1376C17.3968 20.4024 16.0487 21.6652 14.701 22.9147L14.6935 22.9216L14.6862 22.9287C14.6452 22.9682 14.5772 23 14.4899 23C14.4025 23 14.3345 22.9682 14.2935 22.9287L14.287 22.9224L14.2804 22.9162L8.23398 17.2858C8.23382 17.2856 8.23365 17.2854 8.23348 17.2853C7.69928 16.7858 7.09861 16.2641 6.49897 15.7433C6.13714 15.429 5.77569 15.115 5.42943 14.8065C4.48023 13.9607 3.58101 13.1016 2.83896 12.1899C1.36965 10.3845 0.585679 8.46982 1.22572 6.12992L1.22577 6.12993L1.2282 6.12067C1.92985 3.45554 4.28079 1.39138 7.17812 1.01935C8.3935 0.899539 9.61058 1.34693 10.767 2.15054C11.9254 2.9555 12.9441 4.06559 13.7129 5.10494Z"
                                            stroke="#3A8CE4"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            )}
                            {isLike ? <LengthOfLikeAndCommentSuccess>{likeLength}</LengthOfLikeAndCommentSuccess> : <LengthOfLikeAndComment>{likeLength}</LengthOfLikeAndComment>}
                        </span>
                        <span
                            style={{ display: 'flex', alignItems: 'center', transform: 'translateX(350px)' }}
                            onClick={() => {
                                if (paramObjectId) {
                                    history.push(`/boardcontent/${paramObjectId?.id}/comment`);
                                }
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.48916 19.8008C3.36862 19.8008 2.29398 19.3557 1.50163 18.5633C0.709293 17.771 0.26416 16.6963 0.26416 15.5758V4.52578C0.26416 3.40524 0.709293 2.3306 1.50163 1.53826C2.29398 0.745914 3.36862 0.300781 4.48916 0.300781H22.0392C22.594 0.300781 23.1434 0.410064 23.656 0.62239C24.1686 0.834716 24.6344 1.14593 25.0267 1.53826C25.419 1.93058 25.7302 2.39634 25.9426 2.90894C26.1549 3.42154 26.2642 3.97095 26.2642 4.52578V15.5758C26.2642 16.1306 26.1549 16.68 25.9426 17.1926C25.7302 17.7052 25.419 18.171 25.0267 18.5633C24.6344 18.9556 24.1686 19.2668 23.656 19.4792C23.1434 19.6915 22.594 19.8008 22.0392 19.8008H14.5798L8.06416 24.6758C7.82273 24.8565 7.53578 24.9664 7.23542 24.9933C6.93506 25.0202 6.63315 24.963 6.36345 24.8281C6.09375 24.6932 5.86691 24.4859 5.70832 24.2294C5.54973 23.9729 5.46564 23.6773 5.46546 23.3758V19.8008H4.49046H4.48916ZM13.9324 17.8508H22.0392C22.6425 17.8508 23.2212 17.6111 23.6478 17.1845C24.0745 16.7578 24.3142 16.1791 24.3142 15.5758V4.52578C24.3142 3.92241 24.0745 3.34376 23.6478 2.91711C23.2212 2.49047 22.6425 2.25078 22.0392 2.25078H4.48916C3.88579 2.25078 3.30714 2.49047 2.88049 2.91711C2.45385 3.34376 2.21416 3.92241 2.21416 4.52578V15.5758C2.21416 16.8316 3.23336 17.8508 4.48916 17.8508H7.41286V22.7258L13.9324 17.8508Z"
                                        fill="#3A8CE4"
                                    />
                                </svg>
                            </div>
                            <LengthOfLikeAndComment>{fetchingCommentData?.length}</LengthOfLikeAndComment>
                        </span>
                    </BoxOfLikeAndComment>
                </ContainerBaordContent>
            )}
        </Container>
    );
}

export default BoardContent;
