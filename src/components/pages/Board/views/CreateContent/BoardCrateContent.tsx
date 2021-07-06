import { Button, Form } from 'antd';
import Container from 'components/Container/Container';
import { BoardForm, ButtonGoNextCreateContent, ButtonSummitPost, ContainerBoardCreate, CountOfPage, FormInputContent, FormInputNameContent, TextTopicContent } from '../../shared/BoardCreate.styled';
import { Upload } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function BoardCreateContent() {
    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        name: '',
        password: '',
    });
    const [countPage, setCountPage] = useState(1);

    const updateForm = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // useEffect(() => {
    //     console.log(form);
    //     console.log(form.name);
    // }, [form]);
    //----------- CREATE FUNCTION UPLOAD IMAGE -----------//
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
        //filelist - [{uid: "-1",url:'Some url to image'}]
    };

    return (
        <>
            <Container header={{ title: 'สร้างกระทู้', right: 'menu', left: 'back' }}>
                {countPage === 1 ? (
                    <>
                        <ContainerBoardCreate>
                            <TextTopicContent>ชื่อกระทู้</TextTopicContent>
                            <Form initialValues={{ remember: true }}>
                                <BoardForm name="text" rules={[{ required: true, message: 'กรุณากรอกชื่อกระทู้ก่อนดำเนินการต่อ' }]}>
                                    <FormInputNameContent type="text" placeholder="กรุณากรอกชื่อกระทู้" />
                                </BoardForm>
                            </Form>

                            <TextTopicContent>รูปประกอบ (Optional)</TextTopicContent>
                            <Upload accept="image/*" customRequest={uploadImage} onChange={handleOnChange} listType="picture-card" defaultFileList={defaultFileList} className="image-upload-grid">
                                {defaultFileList.length >= 2 ? null : <div>Upload image</div>}
                            </Upload>
                            <TextTopicContent>เนื้อหากระทู้</TextTopicContent>
                            <Form initialValues={{ remember: true }}>
                                <BoardForm name="text" rules={[{ required: true, message: 'กรุณากรอกเนื้อหากระทู้ก่อนดำเนินการต่อ' }]}>
                                    <FormInputContent type="text" placeholder="กรุณากรอกเนื้อหาของกระทู้" />
                                </BoardForm>
                            </Form>
                        </ContainerBoardCreate>
                        <CountOfPage>{countPage} of 2</CountOfPage>
                        <ButtonGoNextCreateContent type="submit" onClick={() => setCountPage(countPage + 1)} disabled={countPage > 1}>
                            ดำเนินการต่อ
                        </ButtonGoNextCreateContent>
                    </>
                ) : null}
                {countPage === 2 ? (
                    <>
                        <ContainerBoardCreate>
                            <TextTopicContent>ประเภทของกระทู้</TextTopicContent>
                            <Button>บทความ</Button>
                            <Button>คำถาม</Button>
                            <TextTopicContent>แฮชเเท็กของกระทุ้</TextTopicContent>
                            <Form initialValues={{ remember: true }}>
                                <BoardForm name="text" rules={[{ required: true, message: 'กรุณากรอกชื่อกระทู้ก่อนดำเนินการต่อ' }]}>
                                    <FormInputNameContent type="text" placeholder="กรุณาเลือกแฮชเเท็กของกระทู้" />
                                </BoardForm>
                            </Form>
                        </ContainerBoardCreate>
                        <ButtonSummitPost>สร้างกระทู้</ButtonSummitPost>
                        <button className="btn btn-dark" type="submit" onClick={() => setCountPage(countPage - 1)} disabled={countPage < 2}>
                            Back
                        </button>
                    </>
                ) : null}
            </Container>
        </>
    );
}

export default BoardCreateContent;
