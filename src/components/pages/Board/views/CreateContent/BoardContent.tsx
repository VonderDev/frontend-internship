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
import { Rate } from 'antd';
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

    //--------------- FETCHING BOARD CONTENT USING SWR ---------------//
    const { data: contentData, error: errorcontentData } = useSWR('/user/contentID/' + paramObjectId.id);

    const isLoadingContentData = !contentData && !errorcontentData;

    //--------------- SET DATE CREATED CONTENT FORMAT ---------------//
    const [dateCreatedFormat, setDateCreatedFormat] = useState<string>();

    useEffect(() => {
        if (contentData) {
            console.log('[Newest Content data ]', contentData);
            //--------------- SET DATE FORMAT ---------------//
            const dateCreatedContent = contentData?.created_at;
            const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
            const createdContentData = new Date(dateCreatedContent);
            setDateCreatedFormat(createdContentData.getDate() + ' ' + months[createdContentData.getMonth()] + ' ' + createdContentData.getFullYear());
        }
    }, [contentData, dateCreatedFormat]);

    //--------------- CREATE VARIABLE FOR MAP ICON LIKE & COMMENT ---------------//
    const ButtonLikeAndCommentList = [
        {
            icon: <Rate character={<HeartFilled style={{ borderColor: 'black' }} />} count={1} style={{ color: '#F0685B', fontSize: '40px' }} />,
            length: <LengthOfLikeAndComment>0</LengthOfLikeAndComment>,
        },
        { icon: <CommentOutlined style={{ color: '#3A8CE4', fontSize: '40px' }} />, length: <LengthOfLikeAndComment>0</LengthOfLikeAndComment> },
    ];

    //--------------- CHANGE TAG CONTENT FROM ENGLIST TO THAI LANGUAGE ---------------//
    const [tagName, setTagName] = useState([{}]);
    function convertEnumToArray() {
        const arrayObjects = [];
        // Retrieve key and values using Object.entries() method.
        for (const [propertyKey, propertyValue] of Object.entries(Weeks)) {
            // Ignore keys that are not numbers
            if (!Number.isNaN(Number(propertyKey))) {
                continue;
            }

            // Add keys and values to array
            arrayObjects.push({ value: propertyValue, nameTag: propertyKey });
        }

        console.log('enum', arrayObjects);
        setTagName(arrayObjects);
    }

    useEffect(() => {
        convertEnumToArray();
        if (tagName) {
            console.log('set tag', tagName);
        }
    }, []);
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
                        return <CategoryTag key={index}>#{item}</CategoryTag>;
                    })}
                    <ProfileImage />
                    <ContainerUserNameAndDate>
                        <AuthorName>{contentData?.author_username}</AuthorName>
                        <DateCreatedContent>{dateCreatedFormat}</DateCreatedContent>
                    </ContainerUserNameAndDate>
                    <ImageOfContent src={contentData?.image}></ImageOfContent>
                    <ContentBody>{contentData?.content_body}</ContentBody>
                    {ButtonLikeAndCommentList.map((item, index) => {
                        return (
                            <BoxOfLikeAndComment key={index}>
                                {item.icon}
                                <span
                                    onClick={() => {
                                        if (paramObjectId) {
                                            history.push(`/boardcontent/${paramObjectId?.id}/comment`);
                                        }
                                    }}
                                >
                                    {item.length}
                                </span>
                            </BoxOfLikeAndComment>
                        );
                    })}
                </ContainerBaordContent>
            )}
        </Container>
    );
}

export default BoardContent;
