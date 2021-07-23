import Container from 'components/Container/Container';
import { ButtonBackToFirstPage, ButtonCancleModal, ButtonExistModal, ModalContainer, TextBodyModal, TextTitleModal } from '../../shared/style/BoardCreate.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LeftOutlined } from '@ant-design/icons';
import { ApiPostContent } from '../../apis/boardCreate.api';
import CreateContentFirstPage from './CreateFirstPage';
import CreateContentSecondPage from './CreateSecondPage';
import { useHistory } from 'react-router-dom';
import { Alert } from 'antd';

function BoardCreateContent() {
    const history = useHistory();
    //----------------- CREATE HOOK FOR POST CONTENT -----------------//
    const [countPage, setCountPage] = useState(1);
    const [contentData, setContentData] = useState<{ title: string; content_body: string; content_type: string; image: string; tag: Array<string> }>({
        title: '',
        content_body: '',
        content_type: '',
        image: '',
        tag: [],
    });
    const updateContentData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentData({
            ...contentData,
            [e.target.name]: e.target.value,
        });
    };

    // useEffect(() => {
    //     console.log('[Content data]:', contentData);
    // }, [contentData]);

    //----------------- CREATE FUNCTION UPLOAD IMAGE -----------------//
    const [defaultFileList, setDefaultFileList] = useState('');

    const uploadImage = async (options: any) => {
        const { onSuccess, onError, file } = options;
        const ImageformData = new FormData();
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
        };
        ImageformData.append('photo', file);
        try {
            console.log('form data', file);
            const res = await axios.post('/images', ImageformData, config);

            onSuccess('Ok');
            console.log('[Response from post image]: ', res.data);
            setContentData({
                ...contentData,
                image: res.data[0],
            });
        } catch (err) {
            console.log('Eroor: ', err);
            const error = new Error('Some error');
            onError({ err });
        }
    };

    const handleOnChangeFileImage = ({ fileList }: any) => {
        console.log('[FileList]:', fileList);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
    };

    //----------------- CREATE FUNCTION FOR SET HASHTAG -----------------//
    function handleChangeOfHashtag(value: any) {
        console.log(`[เลือกประเภทแฮชเเท็ก] = ${value}`);
        setContentData({
            ...contentData,
            tag: value,
        });
    }
    const [isShowNotification, setIsShowNotification] = useState(false);

    //------------ POST CONTENT FUNCTION --------------//
    async function postContent() {
        console.log('content data sent to backend', contentData);
        const objectID = await ApiPostContent(contentData);
        setIsShowNotification(true);
        if (objectID) {
            setTimeout(() => {
                setIsShowNotification(false);
                history.push(`/boardcontent/${objectID?._id}`);
            }, 600);
        }
    }

    //------------ SET STATE FOR CONTENT TYPE --------------//
    const [contentType, setContentType] = useState('');

    const onChangeContentType = (e: any) => {
        console.log('radio checked', e.target.value);
        setContentType(e.target.value);
    };

    //--------------------- SET MODAL STATE ---------------------//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk = () => {
        history.goBack();
        setIsModalVisible(false);
    };
    //SWITCH CASE
    return (
        <>
            <ModalContainer
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                title={<TextTitleModal>ออกจากหน้านี้?</TextTitleModal>}
                footer={[
                    <ButtonExistModal key="back" onClick={handleOk}>
                        ออก
                    </ButtonExistModal>,
                    <ButtonCancleModal key="submit" onClick={handleCancel}>
                        ยกเลิก
                    </ButtonCancleModal>,
                ]}
            >
                <TextBodyModal>ข้อมูลทั้งหมดจะไม่ถูกบันทึก</TextBodyModal>
            </ModalContainer>
            <Container
                header={{
                    title: 'สร้างกระทู้',
                    right: 'menu',
                    left: (
                        <>
                            {countPage === 1 ? (
                                <ButtonBackToFirstPage onClick={showModal}>
                                    <LeftOutlined style={{ color: '#8a8888' }} />
                                </ButtonBackToFirstPage>
                            ) : null}
                            {countPage === 2 ? (
                                <ButtonBackToFirstPage onClick={() => setCountPage(countPage - 1)} disabled={countPage < 2}>
                                    <LeftOutlined style={{ color: '#8a8888' }} />
                                </ButtonBackToFirstPage>
                            ) : null}
                        </>
                    ),
                }}
            >
                {countPage === 1 ? (
                    <CreateContentFirstPage
                        updateContentData={updateContentData}
                        uploadImage={uploadImage}
                        handleOnChangeFileImage={handleOnChangeFileImage}
                        defaultFileList={defaultFileList}
                        countPage={countPage}
                        setCountPage={setCountPage}
                    />
                ) : null}
                {countPage === 2 ? (
                    <>
                        <CreateContentSecondPage
                            updateContentData={updateContentData}
                            countPage={countPage}
                            contentType={contentType}
                            onChangeContentType={onChangeContentType}
                            contentData={contentData}
                            setContentData={setContentData}
                            handleChangeOfHashtag={handleChangeOfHashtag}
                            postContent={postContent}
                            isShowNotification={isShowNotification}
                        />
                    </>
                ) : null}
            </Container>
        </>
    );
}

export default BoardCreateContent;
