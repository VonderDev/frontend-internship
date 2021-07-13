import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ButtonBackToFirstPage } from '../../shared/style/BoardCreate.styled';
import { LeftOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import {
    AuthorName,
    CategoryTag,
    ContainerBaordContent,
    ContainerUserNameAndDate,
    ContentBody,
    DateCreatedContent,
    ImageOfContent,
    ProfileImage,
    TextTitleContent,
    TopicTag,
} from '../../shared/style/BoardContent.styled';

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
    const { data: contentData, error: errorcontentData } = useSWR('/user/newestContent');
    const isLoadingContentData = !contentData && !errorcontentData;

    //--------------- SET DATE CREATED CONTENT FORMAT ---------------//
    const [dateCreatedFormat, setDateCreatedFormat] = useState<string>();

    useEffect(() => {
        if (contentData) {
            console.log('[Newest Content data ]', contentData);
            //--------------- SET DATE FORMAT ---------------//
            var dateCreatedContent = contentData?.created_at;
            const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
            let createdContentData = new Date(dateCreatedContent);
            setDateCreatedFormat(createdContentData.getDate() + ' ' + months[createdContentData.getMonth()] + ' ' + createdContentData.getFullYear());
        }
    }, [contentData, dateCreatedFormat]);

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
                    <TextTitleContent>{contentData.title}</TextTitleContent>
                    <TopicTag>บทความ</TopicTag>
                    {contentData.tag?.map((item: any, index: any) => {
                        return <CategoryTag key={index}>#{item}</CategoryTag>;
                    })}
                    <ProfileImage />
                    <ContainerUserNameAndDate>
                        <AuthorName>{contentData.author_username}</AuthorName>
                        <DateCreatedContent>{dateCreatedFormat}</DateCreatedContent>
                    </ContainerUserNameAndDate>
                    <ImageOfContent src={contentData.image}></ImageOfContent>
                    <ContentBody>{contentData.content_body}</ContentBody>
                </ContainerBaordContent>
            )}
        </Container>
    );
}

export default BoardContent;
