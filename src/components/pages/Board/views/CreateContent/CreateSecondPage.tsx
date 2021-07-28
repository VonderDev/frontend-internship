import React from 'react';
import { NotificationCreatedPostSuccess } from '../../shared/style/BoardContent.styled';
import {
    ButtonSelectedTag,
    ButtonSummitPost,
    CircleChoice,
    CircleSelection,
    ContainerBoardCreate,
    ContainerContentType,
    ContentTypeButton,
    CountOfPageTwo,
    InputHashtagInDrawer,
    OptionHashtag,
    TextTopicContent,
} from '../../shared/style/BoardCreate.styled';
import { CheckCircleOutlined } from '@ant-design/icons';
import { CancleTag, CustomCheckableTag } from '../../shared/Filter.styles';
import { transalateToThai } from 'utils/transalator/transalator';
import { Box } from 'shared/style/theme/component';
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
                                        <div style={{ transform: 'translateY(15px) translateX(-30px)' }}>{contentData.content_type.includes(item.value) ? <CircleSelection /> : <CircleChoice />}</div>
                                        <div style={{ transform: 'translateY(-10px)' }}>{item.label}</div>
                                    </ContentTypeButton>
                                </ContainerContentType>
                            );
                        })}
                        <TextTopicContent>แฮชเเท็กของกระทู้ (Optional)</TextTopicContent>
                        <InputHashtagInDrawer
                            dropdownStyle={{ boxShadow: 'unset' }}
                            mode="multiple"
                            showSearch={false}
                            style={{ width: '90%' }}
                            placeholder="กรุณาเลือกแฮชเเท็กของกระทู้"
                            onChange={handleChangeOfHashtag}
                            removeIcon={false}
                        >
                            {OPTIONAL_TAG.map((item: any, index: any) => {
                                return (
                                    <OptionHashtag value={item.value} key={index}>
                                        #{item.tagName}
                                    </OptionHashtag>
                                );
                            })}
                        </InputHashtagInDrawer>
                        {contentData?.tag.map((item: any, index: any) => {
                            console.log('In Option', contentData?.tag);
                            return (
                                <OptionHashtag value={item} key={index}>
                                    #{item}
                                </OptionHashtag>
                            );
                        })}
                        {contentData?.tag.map((item: any, index: any) => {
                            let tagIndex = contentData?.tag.indexOf(item);
                            return (
                                <div key={index}>
                                    {/* onClick={contentData?.tag.indexOf(item) > -1} */}
                                    <ButtonSelectedTag>
                                        {' '}
                                        #{transalateToThai(item)}
                                        <div style={{ marginLeft: '3px', transform: 'translateY(1px)' }}>
                                            <CancleTag
                                                onClick={() => {
                                                    console.log(contentData?.tag);
                                                    let test = contentData?.tag.filter((e: any, i: any) => i != tagIndex);
                                                    console.log('Data real', test);

                                                    handleChangeOfHashtag(test);
                                                }}
                                            />
                                        </div>
                                    </ButtonSelectedTag>
                                </div>
                            );
                        })}
                        {contentData?.tag.map((item: any, index: any) => (
                            <div key={index} style={{ marginRight: '10px', marginBottom: '5px' }}>
                                <OptionHashtag style={{ fontWeight: 'normal' }} key={index} value={item.value} onChange={handleChangeOfHashtag}>
                                    #{transalateToThai(item)}
                                </OptionHashtag>
                            </div>
                        ))}
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
