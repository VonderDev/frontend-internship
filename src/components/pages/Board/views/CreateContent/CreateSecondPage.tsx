import React from 'react';
import {
    ButtonSummitPost,
    ContainerBoardCreate,
    ContainerContentType,
    ContentTypeButton,
    CountOfPageCreateContent,
    InputHashtagInDrawer,
    OptionHashtag,
    TextTopicContent,
} from '../../shared/style/BoardCreate.styled';

interface CreateContentSecondPageProps {
    updateContentData: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
    countPage: number;
    contentType: string;
    onChangeContentType: (event: any) => void;
    contentData: any;
    setContentData: Function;
    handleChangeOfHashtag: (value: any) => void;
    postContent: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const CreateContentSecondPage: React.FC<CreateContentSecondPageProps> = ({ countPage, contentType, onChangeContentType, contentData, setContentData, handleChangeOfHashtag, postContent }) => {
    //----------------- CREATE VARIABLE FOR MAP CATEGORY BOARD -----------------//
    const categoryContentList = [
        { value: 'board', label: 'บทความ' },
        { value: 'question', label: 'คำถาม' },
    ];

    //----------------- CREATE VARIABLE FOR HASHTAG -----------------//
    const optionalTag = [
        { value: 'word smart', tagName: 'ภาษา' },
        { value: 'logic smart', tagName: 'ตรรกะ' },
        { value: 'music smart', tagName: 'ดนตรี' },
        { value: 'nature smart', tagName: 'ธรรมชาติ' },
        { value: 'picture smart', tagName: 'มิติสัมพันธ์' },
        { value: 'body smart', tagName: 'การเคลื่อนไหว' },
        { value: 'people smart', tagName: 'มนุษยสัมพันธ์' },
        { value: 'self smart', tagName: 'เข้าใจตนเอง' },
    ];

    return (
        <>
            {/* {contentData.map((item, index) => {
                            <Tag closable onClose={log}>
                                {contentData.tag[index]}
                            </Tag>;
                        })} */}
            {/* <Tag closable onClose={log}>
                            {contentData.tag[0]}
                        </Tag> */}
            <ContainerBoardCreate>
                <TextTopicContent>ประเภทของกระทู้</TextTopicContent>
                {categoryContentList.map((item, index) => {
                    return (
                        <ContainerContentType key={index} onChange={onChangeContentType} value={contentType}>
                            <ContentTypeButton
                                value={item.value}
                                onClick={() => {
                                    console.log('เลือกประเภทบทความ :', item.value);
                                    setContentData({
                                        ...contentData,
                                        content_type: item.value,
                                    });
                                }}
                            >
                                {item.label}
                            </ContentTypeButton>
                        </ContainerContentType>
                    );
                })}
                <TextTopicContent>แฮชเเท็กของกระทู้ (Optional)</TextTopicContent>
                <InputHashtagInDrawer
                    dropdownStyle={{ boxShadow: 'unset' }}
                    mode="multiple"
                    // defaultOpen={true}
                    style={{ width: '90%' }}
                    placeholder="กรุณาเลือกแฮชเเท็กของกระทู้"
                    onChange={handleChangeOfHashtag}
                >
                    {' '}
                    {optionalTag.map((item, index) => {
                        return (
                            <OptionHashtag value={item.value} key={index}>
                                #{item.tagName}
                            </OptionHashtag>
                        );
                    })}
                </InputHashtagInDrawer>
                {optionalTag.map((item, index) => {
                    return (
                        <OptionHashtag value={item.value} key={index}>
                            #{item.tagName}
                        </OptionHashtag>
                    );
                })}
                {/* <ButtonUseHashtags
                                onClick={() => {
                                    console.log('เลือกประเภทแฮชเเท๊ก :', contentData);
                                }}
                            >
                                ใช้แฮชเเท็ก
                            </ButtonUseHashtags> */}
                {/* <Form initialValues={{ remember: true }}>
                            <CreateContentForm>
                                <FormInputNameContent onClick={showDrawer} type="text" placeholder="กรุณาเลือกแฮชเเท็กของกระทู้" />
                            </CreateContentForm>
                        </Form> */}
            </ContainerBoardCreate>
            <CountOfPageCreateContent>{countPage} / 2</CountOfPageCreateContent>
            <ButtonSummitPost htmlType="submit" onClick={postContent}>
                สร้างกระทู้
            </ButtonSummitPost>
        </>
    );
};

export default CreateContentSecondPage;
