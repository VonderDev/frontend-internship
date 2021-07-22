import { Alert, Spin } from 'antd';
import { IsLoadingSpinner } from 'components/pages/Test/shared/styles/Test/TestPage.styled';
import React from 'react';
import { NotificationCreatedPostSuccess } from '../../shared/style/BoardContent.styled';
import {
    ButtonSummitPost,
    ContainerBoardCreate,
    ContainerContentType,
    ContentTypeButton,
    CountOfPageCreateContent,
    CountOfPageTwo,
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
    isShowNotification: boolean;
}

//----------------- CREATE VARIABLE FOR MAP CATEGORY BOARD -----------------//
const categoryContentList = [
    { value: 'board', label: 'บทความ' },
    { value: 'question', label: 'คำถาม' },
];

//----------------- CREATE VARIABLE FOR HASHTAG -----------------//
const OPTIONAL_TAG = [
    { value: 'word smart', tagName: 'ภาษา' },
    { value: 'logic smart', tagName: 'ตรรกะ' },
    { value: 'music smart', tagName: 'ดนตรี' },
    { value: 'nature smart', tagName: 'ธรรมชาติ' },
    { value: 'picture smart', tagName: 'มิติสัมพันธ์' },
    { value: 'body smart', tagName: 'การเคลื่อนไหว' },
    { value: 'people smart', tagName: 'มนุษยสัมพันธ์' },
    { value: 'self smart', tagName: 'เข้าใจตนเอง' },
];

const CreateContentSecondPage: React.FC<CreateContentSecondPageProps> = ({
    countPage,
    contentType,
    onChangeContentType,
    contentData,
    setContentData,
    handleChangeOfHashtag,
    postContent,
    isShowNotification,
}) => {
    return (
        <>
            {isShowNotification ? (
                <NotificationCreatedPostSuccess message="สร้างกระทู้สำเร็จเเล้ว" type="success" showIcon />
            ) : (
                <>
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
                            {OPTIONAL_TAG.map((item, index) => {
                                return (
                                    <OptionHashtag value={item.value} key={index}>
                                        #{item.tagName}
                                    </OptionHashtag>
                                );
                            })}
                        </InputHashtagInDrawer>
                        {OPTIONAL_TAG.map((item, index) => {
                            return (
                                <OptionHashtag value={item.value} key={index}>
                                    #{item.tagName}
                                </OptionHashtag>
                            );
                        })}
                    </ContainerBoardCreate>
                    <ButtonSummitPost htmlType="submit" onClick={postContent}>
                        สร้างกระทู้
                    </ButtonSummitPost>
                    <CountOfPageTwo>{countPage} / 2</CountOfPageTwo>
                </>
            )}
        </>
    );
};

export default CreateContentSecondPage;
