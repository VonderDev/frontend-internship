import { Select, Form, Input, Tag } from 'antd';
import Container from 'components/Container/Container';
import {
    ButtonBackToFirstPage,
    ButtonGoNextCreateContent,
    ButtonOfCategory,
    ButtonSummitPost,
    ButtonUseHashtags,
    ContainerBoardCreate,
    CountOfPageCreateContent,
    CreateContentForm,
    DrawerContainer,
    DrawerOfHashtag,
    FormInputContent,
    FormInputNameContent,
    InputHashtagInDrawer,
    OptionHashtag,
    TextTopicContent,
    UploadImage,
} from '../../shared/BoardCreate.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FileImageTwoTone } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import styles from '../../shared/TestPage.less';
import { ApiPostContent } from '../../apis/boardCreate.api';
import { DrawerRadius, PrivacyContainer, TextRegister } from 'components/pages/Authentication/shared/style';

function BoardCreateContent() {
    //----------------- CREATE HOOK FOR POST CONTENT -----------------//
    const [countPage, setCountPage] = useState(1);
    const [contentData, setContentData] = useState({
        title: '',
        content_body: '',
        content_type: '',
        tag: [],
    });
    const updateContentData = (e: any) => {
        setContentData({
            ...contentData,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        console.log('[Content data]:', contentData);
    }, [contentData]);

    //----------------- CREATE VARIABLE FOR MAP CATEGORY BOARD -----------------//
    const categoryContentList = [
        { value: 'บทความ', label: 'บทความ' },
        { value: 'คำถาม', label: 'คำถาม' },
    ];

    //----------------- CREATE FUNCTION UPLOAD IMAGE -----------------//
    const [defaultFileList, setDefaultFileList] = useState([]);

    const uploadImage = async (options: any) => {
        const { onSuccess, onError, file } = options;
        const formData = new FormData();
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
        };
        formData.append('image', file);
        try {
            console.log('form data', file);
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData, config);

            onSuccess('Ok');
            console.log('server res: ', res);
        } catch (err) {
            console.log('Eroor: ', err);
            const error = new Error('Some error');
            onError({ err });
        }
    };

    const handleOnChange = ({ file, fileList, event }: any) => {
        console.log('[FileList]:', fileList);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
    };

    //----------------- CREATE VARIABLE FOR DRAWER -----------------//
    const [visible, setVisible] = useState<boolean>(false);
    const [placement, setPlacement] = useState<string>('bottom');
    const showDrawer = () => {
        setVisible(true);
    };
    const onCloseDrawer = () => {
        setVisible(false);
    };

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

    function handleChangeOfHashtag(value: any) {
        console.log(`[เลือกประเภทแฮชเเท็ก] = ${value}`);
        setContentData({
            ...contentData,
            tag: value,
        });
    }

    //------------ POST CONTENT FUNCTION --------------//
    function postContent() {
        console.log('content data sent to backend', contentData);
        ApiPostContent(contentData);
    }

    return (
        <>
            <Container
                header={{
                    title: 'สร้างกระทู้',
                    right: 'menu',
                    left: (
                        <ButtonBackToFirstPage onClick={() => setCountPage(countPage - 1)} disabled={countPage < 2}>
                            <LeftOutlined style={{ color: '#8a8888' }} />
                        </ButtonBackToFirstPage>
                    ),
                }}
            >
                {countPage === 1 ? (
                    <>
                        <ContainerBoardCreate>
                            <TextTopicContent>ชื่อกระทู้</TextTopicContent>

                            <Form>
                                <CreateContentForm name="nameContent" rules={[{ required: true, message: 'กรุณากรอกชื่อกระทู้ก่อนดำเนินการต่อ' }]}>
                                    <FormInputNameContent name="title" type="text" placeholder="กรุณากรอกชื่อกระทู้" onChange={updateContentData} />
                                </CreateContentForm>
                                <TextTopicContent>รูปประกอบ (Optional)</TextTopicContent>
                                <UploadImage
                                    accept="image/*"
                                    customRequest={uploadImage}
                                    onChange={handleOnChange}
                                    listType="picture-card"
                                    defaultFileList={defaultFileList}
                                    className="image-upload-grid"
                                >
                                    {defaultFileList.length >= 2 ? null : (
                                        <div>
                                            <FileImageTwoTone style={{ fontSize: '35px' }} />
                                        </div>
                                    )}
                                </UploadImage>
                                <TextTopicContent>เนื้อหากระทู้</TextTopicContent>
                                <CreateContentForm name="content" rules={[{ required: true, message: 'กรุณากรอกเนื้อหากระทู้ก่อนดำเนินการต่อ' }]}>
                                    <FormInputContent name="content_body" placeholder="กรุณากรอกเนื้อหาของกระทู้" onChange={updateContentData} />
                                </CreateContentForm>
                            </Form>
                        </ContainerBoardCreate>
                        <CountOfPageCreateContent>{countPage} / 2</CountOfPageCreateContent>
                        <ButtonGoNextCreateContent htmlType="submit" onClick={() => setCountPage(countPage + 1)} disabled={countPage > 2}>
                            ดำเนินการต่อ
                        </ButtonGoNextCreateContent>
                    </>
                ) : null}
                {countPage === 2 ? (
                    <>
                        {/* {contentData.map((item, index) => {
                            <Tag closable onClose={log}>
                                {contentData.tag[index]}
                            </Tag>;
                        })} */}
                        {/* <Tag closable onClose={log}>
                            {contentData.tag[0]}
                        </Tag> */}
                        <DrawerContainer>
                            <DrawerOfHashtag
                                placement="bottom"
                                style={{ position: 'absolute', overflowY: 'hidden' }}
                                getContainer={false}
                                closable={false}
                                onClose={onCloseDrawer}
                                visible={visible}
                                key={placement}
                                height="85vh"
                            >
                                <InputHashtagInDrawer
                                    dropdownStyle={{ boxShadow: 'unset' }}
                                    mode="multiple"
                                    // defaultOpen={true}
                                    style={{ width: '100%' }}
                                    placeholder="#ตรรกะ #ดนตรี"
                                    onChange={handleChangeOfHashtag}
                                    className={styles.customSelect}
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
                                <ButtonUseHashtags
                                    onClick={() => {
                                        console.log('เลือกประเภทแฮชเเท๊ก :', contentData);
                                    }}
                                >
                                    ใช้แฮชเเท็ก
                                </ButtonUseHashtags>
                            </DrawerOfHashtag>
                            <ContainerBoardCreate>
                                <TextTopicContent>ประเภทของกระทู้</TextTopicContent>
                                {categoryContentList.map((item, index) => {
                                    return (
                                        <ButtonOfCategory
                                            key={index}
                                            name="content_type"
                                            onClick={() => {
                                                console.log('เลือกประเภทบทความ :', item.value);
                                                setContentData({
                                                    ...contentData,
                                                    content_type: item.value,
                                                });
                                            }}
                                        >
                                            {item.label}
                                        </ButtonOfCategory>
                                    );
                                })}
                            </ContainerBoardCreate>
                            <TextTopicContent>แฮชเเท็กของกระทู้ (Optional)</TextTopicContent>
                            <Form initialValues={{ remember: true }}>
                                <CreateContentForm>
                                    <FormInputNameContent onClick={showDrawer} type="text" placeholder="กรุณาเลือกแฮชเเท็กของกระทู้" />
                                </CreateContentForm>
                            </Form>

                            <CountOfPageCreateContent>{countPage} / 2</CountOfPageCreateContent>
                            <ButtonSummitPost type="submit" onClick={postContent}>
                                สร้างกระทู้
                            </ButtonSummitPost>
                        </DrawerContainer>
                    </>
                ) : null}
            </Container>
        </>
    );
}

export default BoardCreateContent;
