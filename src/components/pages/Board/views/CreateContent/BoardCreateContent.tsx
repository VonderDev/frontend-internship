import Container from 'components/Container/Container';
import { ButtonBackToFirstPage } from '../../shared/style/BoardCreate.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LeftOutlined } from '@ant-design/icons';
import { ApiPostContent } from '../../apis/boardCreate.api';
import CreateContentFirstPage from './CreateFirstPage';
import CreateContentSecondPage from './CreateSecondPage';
import { useHistory } from 'react-router-dom';

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

    useEffect(() => {
        console.log('[Content data]:', contentData);
    }, [contentData]);

    //----------------- CREATE FUNCTION UPLOAD IMAGE -----------------//
    const [defaultFileList, setDefaultFileList] = useState('');

    const uploadImage = async (options: any) => {
        const { onSuccess, onError, file } = options;
        const formData = new FormData();
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
        };
        formData.append('photo', file);
        try {
            console.log('form data', file);
            const res = await axios.post('/images', formData, config);

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

    const handleOnChangeFileImage = ({ file, fileList, event }: any) => {
        console.log('[FileList]:', fileList);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
    };

    //----------------- CREATE VARIABLE FOR DRAWER -----------------//
    // const [visible, setVisible] = useState<boolean>(false);
    // const [placement, setPlacement] = useState<string>('bottom');
    // const showDrawer = () => {
    //     setVisible(true);
    // };
    // const onCloseDrawer = () => {
    //     setVisible(false);
    // };

    //----------------- CREATE FUNCTION FOR SET HASHTAG -----------------//
    function handleChangeOfHashtag(value: any) {
        console.log(`[เลือกประเภทแฮชเเท็ก] = ${value}`);
        setContentData({
            ...contentData,
            tag: value,
        });
    }

    //------------ POST CONTENT FUNCTION --------------//W
    async function postContent() {
        console.log('content data sent to backend', contentData);
        var objectID = await ApiPostContent(contentData);
        history.push(`/boardcontent/${objectID._id}`);
    }

    //------------ SET STATE FOR CONTENT TYPE --------------//
    const [contentType, setContentType] = useState('');

    const onChangeContentType = (e: any) => {
        console.log('radio checked', e.target.value);
        setContentType(e.target.value);
    };

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
                        />
                    </>
                ) : null}
            </Container>
        </>
    );
}

export default BoardCreateContent;
