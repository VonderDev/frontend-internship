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
export enum Weeks {
    ภาษา = 'word smart',
    ตรรกะ = 'logic smart',
    ดนตรี = 'music smart',
    ธรรมชาติ = 'nature smart',
    มิติสัมพันธ์ = 'picture smart',
    การเคลื่อนไหว = 'body smart',
    มนุษย์สัมพันธ์ = 'people smart',
    เข้าใจตนเอง = 'self smart',
}
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
    useEffect(() => {
        console.log('[useParams : obejctID]:', paramObjectId);
    }, []);

    //----------------- PUT LIKE OF CONTENT -----------------//
    const [addLike, setAddLike] = useState<{ content_id: string }>({
        content_id: '',
    });

    useEffect(() => {
        setAddLike({
            ...addLike,
            content_id: paramObjectId.id,
        });
        console.log('add Like :', addLike);
    }, []);

    function addLikeOfBoardContent() {
        ApiPutLikeOfBoardContent(addLike);
    }

    //--------------- FETCHING BOARD CONTENT USING SWR ---------------//
    const { data: contentData, error: errorcontentData } = useSWR('/user/contentID/' + paramObjectId.id);

    const isLoadingContentData = !contentData && !errorcontentData;

    //--------------- SET DATE CREATED CONTENT FORMAT ---------------//
    const [dateCreatedFormat, setDateCreatedFormat] = useState<string>();

    const { user, login, token, getUser } = useAuthContext();
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        console.log('user login', user);
        if (contentData) {
            console.log('[Newest Content data ]', contentData);
            //--------------- SET DATE FORMAT ---------------//
            const dateCreatedContent = contentData?.created_at;
            const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
            const createdContentData = new Date(dateCreatedContent);
            setDateCreatedFormat(createdContentData.getDate() + ' ' + months[createdContentData.getMonth()] + ' ' + createdContentData.getFullYear());
            const uidLikes = contentData?.uid_likes;
            console.log('[uid likes :]', uidLikes.includes('60dadd502c82f310974b8db'));
            //---------------- set isLike ------------------//
            setIsLike(uidLikes.includes('60dadd502c82f310974b8db'));
        }
    }, [contentData, dateCreatedFormat]);

    //--------------- FETCHING COMMENT DATA FOR SHOW LENGTH OF COMMENTED ---------------//
    //--------------- AND CREATE LIST OF BUTTON LIKE AND COMMENT ---------------//
    const { data: fetchingCommentData, error: errorfetchingComment } = useSWR(`/user/comment/get/1-100/${paramObjectId.id}`);
    // const ButtonLikeAndCommentList = [
    //     {
    //         icon: ,
    //         length: ,
    //     },
    //     { icon:  },
    // ];

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
                    <TopicTag>บทความ</TopicTag>
                    {contentData?.tag?.map((item: any, index: any) => {
                        //------------- Not good in future -------------//
                        if (item === 'word smart') {
                            return '#ภาษา';
                        }
                        if (item === 'logic smart') {
                            return '#ตรรกะ';
                        }
                        if (item === 'music smart') {
                            return '#ดนตรี';
                        }
                        if (item === 'nature smart') {
                            return '#ธรรมชาติ';
                        }
                        if (item === 'picture smart') {
                            return '#มิติสัมพันธ์';
                        }
                        if (item === 'body smart') {
                            return '#การเคลื่อนไหว';
                        }
                        if (item === 'people smart') {
                            return '#มนุษย์สัมพันธ์';
                        }
                        if (item === 'self smart') {
                            return '#เข้าใจตนเอง';
                        }
                        return <CategoryTag key={index}>#{item}</CategoryTag>;
                    })}
                    <ProfileImage />
                    <ContainerUserNameAndDate>
                        <AuthorName>{contentData?.author_username}</AuthorName>
                        <DateCreatedContent>{dateCreatedFormat}</DateCreatedContent>
                    </ContainerUserNameAndDate>
                    <ImageOfContent src={contentData?.image}></ImageOfContent>
                    <ContentBody>{contentData?.content_body}</ContentBody>

                    <BoxOfLikeAndComment>
                        {isLike ? <HeartFilled style={{ borderColor: 'green' }} onClick={addLikeOfBoardContent} /> : <HeartOutlined style={{ borderColor: 'red' }} onClick={addLikeOfBoardContent} />}
                        <span
                            onClick={() => {
                                if (paramObjectId) {
                                    history.push(`/boardcontent/${paramObjectId?.id}/comment`);
                                }
                            }}
                        >
                            <LengthOfLikeAndComment>{contentData?.uid_likes.length}</LengthOfLikeAndComment>
                        </span>
                        <span>
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
