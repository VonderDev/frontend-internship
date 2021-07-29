import { FileImageTwoTone } from '@ant-design/icons';
import { Form } from 'antd';
import React from 'react';
import {
    ButtonGoNextCreateContent,
    ContainerBoardCreate,
    CountOfPageCreateContent,
    CreateContentForm,
    FormInputContent,
    FormInputNameContent,
    TextTopicContent,
    UploadImage,
} from '../../shared/style/BoardCreate.styled';

interface CreateContentFirstPageProps {
    updateContentData: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
    uploadImage: (options: any) => void;
    handleOnChangeFileImage: (info: any) => void;
    defaultFileList: any;
    countPage: number;
    setCountPage: Function;
}

const CreateContentFirstPage: React.FC<CreateContentFirstPageProps> = ({ updateContentData, uploadImage, handleOnChangeFileImage, defaultFileList, countPage, setCountPage }) => {
    const onImagePreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        if (imgWindow !== null) {
            imgWindow.document.write(image.outerHTML);
        }
    };

    return (
        <>
            <ContainerBoardCreate>
                <TextTopicContent>ชื่อกระทู้</TextTopicContent>
                <Form onFinish={() => setCountPage(countPage + 1)} layout="horizontal">
                    <CreateContentForm name="title" rules={[{ required: true, message: 'กรุณากรอกชื่อกระทู้ก่อนดำเนินการต่อ' }]}>
                        <FormInputNameContent name="title" type="text" placeholder="กรุณากรอกชื่อกระทู้" onChange={updateContentData} />
                    </CreateContentForm>

                    <TextTopicContent>รูปประกอบ (Optional)</TextTopicContent>
                    <UploadImage
                        accept="image/*"
                        customRequest={uploadImage}
                        onChange={handleOnChangeFileImage}
                        listType="picture-card"
                        defaultFileList={defaultFileList}
                        onPreview={onImagePreview}
                        className="image-upload-grid"
                    >
                        {defaultFileList.length >= 1 ? null : (
                            <div>
                                <FileImageTwoTone style={{ fontSize: '35px' }} />
                            </div>
                        )}
                    </UploadImage>
                    <TextTopicContent>เนื้อหากระทู้</TextTopicContent>
                    <CreateContentForm name="content" rules={[{ required: true, message: 'กรุณากรอกเนื้อหากระทู้ก่อนดำเนินการต่อ' }]}>
                        <FormInputContent name="content_body" placeholder="กรุณากรอกเนื้อหาของกระทู้" onChange={updateContentData} />
                    </CreateContentForm>
                    <ButtonGoNextCreateContent htmlType="submit" disabled={countPage > 2}>
                        ดำเนินการต่อ
                    </ButtonGoNextCreateContent>
                </Form>
            </ContainerBoardCreate>
            <CountOfPageCreateContent>{countPage} / 2</CountOfPageCreateContent>
        </>
    );
};

export default CreateContentFirstPage;
