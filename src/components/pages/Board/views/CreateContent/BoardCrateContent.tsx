import { Col, Form, Row } from 'antd';
import Container from 'components/Container/Container';
import { InputCreateContent, BoardForm, ContainerBoardCreate } from '../../shared/BoardCreate.styled';
import { Upload } from 'antd';
import { useState } from 'react';
import axios from 'axios';

function BoardCreateContent() {
    //----------- CREATE FUNCTION UPLOAD IMAGE -----------//
    const [defaultFileList, setDefaultFileList] = useState([]);

    const uploadImage = async (options: any) => {
        const { onSuccess, onError, file } = options;
        const formData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        formData.append('image', file);
        try {
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
        console.log('[file, fileList, event]', fileList);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
        //filelist - [{uid: "-1",url:'Some url to image'}]
    };

    return (
        <Container header={{ title: 'สร้างกระทู้', right: 'menu', left: 'back' }}>
            <ContainerBoardCreate>
                <div>ชื่อกระทู้</div>
                <Form initialValues={{ remember: true }} layout="horizontal">
                    <BoardForm name="text" rules={[{ required: true, message: 'กรุณากรอกชื่อกระทู้ก่อนดำเนินการต่อ' }]}>
                        <InputCreateContent type="text" placeholder="กรุณากรอกชื่อกระทู้" />
                    </BoardForm>
                </Form>

                <div>รูปประกอบ (Optional)</div>
                <Upload accept="image/*" customRequest={uploadImage} onChange={handleOnChange} listType="picture-card" defaultFileList={defaultFileList} className="image-upload-grid">
                    {defaultFileList.length >= 1 ? null : <div>Upload image</div>}
                </Upload>
                {/* <Row>
                    <Col span={24}>ชื่อกระทู้</Col>
                </Row>
                <Row>
                    <Col span={24}>รูปประกอบ (Optional)</Col>
                    <Row>sdsdsdd</Row>
                </Row> */}
            </ContainerBoardCreate>
        </Container>
    );
}

export default BoardCreateContent;
