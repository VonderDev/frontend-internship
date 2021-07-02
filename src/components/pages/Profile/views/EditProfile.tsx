import { useEffect, useState } from 'react';
import { BackHeader } from 'components/Container/Header.styled';
import { ConfirmModal, ButtonLeaveModal, ButtonCancleModal, TextHeadModal, TextBodyModal, ButtonSave, ContainerProfile, FormInput, TextTopicEditProfile, UserImage } from '../shared/Profile.styles';
import { LeftOutlined } from '@ant-design/icons';
import Container from 'components/Container/Container';
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';
import { ApiGetUserData, ApiPutUserData } from '../apis/profile.api';
import { IUser } from '../shared/Profile.interface';
import ProfileMascot from '../../Profile/images/ProfileMascot.png';
const EditProfile = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const history = useHistory();

    const handleOk = () => {
        history.goBack();
        setIsModalVisible(false);
    };

    const [userInfo, setUserInfo] = useState<IUser>({ firstName: '', lastName: '', email: '', username: '' });
    async function getStatisticData() {
        const response = await ApiGetUserData();
        //Swr ใช้เป็น custom hook
        if (response) {
            setUserInfo((prevState) => ({
                ...prevState,
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                username: response.username,
            }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    const handleOnChange = (name: string, value: string) => {
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const putDataOnClick = () => {
        //เพิ่ม async await , Loading
        ApiPutUserData(userInfo);
    };

    return (
        <>
            <ConfirmModal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                title={<TextHeadModal>ออกจากหน้านี้?</TextHeadModal>}
                footer={[
                    <ButtonLeaveModal key="back" onClick={handleOk}>
                        ออก
                    </ButtonLeaveModal>,
                    <ButtonCancleModal key="submit" onClick={handleCancel}>
                        ยกเลิก
                    </ButtonCancleModal>,
                ]}
            >
                <TextBodyModal>การเปลี่ยนแปลงทั้งหมดจะไม่ถูกบันทึก</TextBodyModal>
            </ConfirmModal>
            <Container
                header={{
                    left: (
                        <BackHeader onClick={showModal}>
                            <LeftOutlined style={{ color: '#8a8888' }} />
                        </BackHeader>
                    ),
                    children: 'แก้ไขข้อมูลส่วนตัว',
                    right: (
                        <ButtonSave htmlType="submit" onClick={putDataOnClick}>
                            บันทึก
                        </ButtonSave>
                    ),
                }}
            >
                <ContainerProfile>
                    <UserImage src={ProfileMascot} />
                    <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                    <Form>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้!' }]}>
                            <FormInput
                                name="username"
                                value={userInfo.username}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </Form.Item>
                        <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่ชื่อจริง!' }]}>
                            <FormInput
                                name="firstName"
                                value={userInfo.firstName}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </Form.Item>
                        <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่นามสกุล!' }]}>
                            <FormInput
                                name="lastName"
                                value={userInfo.lastName}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </Form.Item>
                        <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่อีเมล!' }]}>
                            <FormInput
                                name="email"
                                value={userInfo.email}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                                disabled
                            />
                        </Form.Item>
                    </Form>
                </ContainerProfile>
            </Container>
        </>
    );
};

export default EditProfile;