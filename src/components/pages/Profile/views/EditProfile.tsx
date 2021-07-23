import { useEffect, useState } from 'react';
import { BackHeader } from 'components/Container/Header.styled';
import { ConfirmModal, ButtonLeaveModal, ButtonCancleModal, TextHeadModal, TextBodyModal, ButtonSave, TextTopicEditProfile, UserImage } from '../shared/Profile.styles';
import { LeftOutlined } from '@ant-design/icons';
import Container from 'components/Container/Container';
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';
import { ApiGetUserData, ApiPutUserData } from '../apis/profile.api';
import { IUser } from '../shared/Profile.interface';
import ProfileMascot from '../../Profile/images/ProfileMascot.png';
import { Box, InputStyle } from 'shared/style/theme/component';
const EditProfile = () => {
    //Modal state and function-----------------------------------------------------------------------------
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
    //Set data from Get API-----------------------------------------------------------------------------
    const [userInfo, setUserInfo] = useState<IUser>({ firstName: '', lastName: '', email: '', username: '' });
    async function getStatisticData() {
        const response = await ApiGetUserData();
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
    //Function put API-----------------------------------------------------------------------------
    const putDataOnClick = () => {
        if (userInfo.username === '') {
            alert('กรุณากรอกชื่อผู้ใช้!');
        } else if (userInfo.firstName === '') {
            alert('กรุณากรอกชื่อจริง!');
        } else if (userInfo.lastName === '') {
            alert('กรุณากรอกนามสกุล!');
        } else {
            ApiPutUserData(userInfo);
            setTimeout(() => {
                history.push('/profile');
            }, 1200);
        }
        // console.log(typeof userInfo.username);
    };
    const history = useHistory();
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
                    title: 'แก้ไขข้อมูลส่วนตัว',
                    right: (
                        <ButtonSave htmlType="submit" onClick={putDataOnClick}>
                            บันทึก
                        </ButtonSave>
                    ),
                }}
            >
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="center" align="center" direction="column">
                    <UserImage src={ProfileMascot} />
                    <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                    <Form>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้!' }]}>
                            <InputStyle
                                type="text"
                                typeinput="Large"
                                name="username"
                                value={userInfo.username}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </Form.Item>
                        <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่ชื่อจริง!' }]}>
                            <InputStyle
                                type="text"
                                typeinput="Large"
                                name="firstName"
                                value={userInfo.firstName}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </Form.Item>
                        <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่นามสกุล!' }]}>
                            <InputStyle
                                type="text"
                                typeinput="Large"
                                name="lastName"
                                value={userInfo.lastName}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </Form.Item>
                        <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                        <Form.Item rules={[{ required: true, message: 'กรุณาใส่อีเมล!' }]}>
                            <InputStyle
                                type="text"
                                typeinput="Large"
                                name="email"
                                value={userInfo.email}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                                disabled
                            />
                        </Form.Item>
                    </Form>
                </Box>
            </Container>
        </>
    );
};
export default EditProfile;
