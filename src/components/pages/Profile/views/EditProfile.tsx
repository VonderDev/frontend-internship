import { useState, useEffect, useCallback } from 'react';
import { BackHeader } from 'components/Container/Header.styled';
import { ConfirmModal, ButtonLeaveModal, ButtonCancleModal, TextHeadModal, TextBodyModal } from '../shared/Profile.styles';
import { ProfileInput } from './ProfileInput';
import { LeftOutlined } from '@ant-design/icons';
import Container from 'components/Container/Container';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const history = useHistory();

    const goBack = useCallback(() => {
        history.goBack();
    }, []);
    return (
        <Container
            header={{
                left: (
                    <BackHeader onClick={showModal}>
                        <LeftOutlined style={{ color: '#8a8888' }} />
                    </BackHeader>
                ),
                title: 'แก้ไขข้อมูลส่วนตัว',
                right: <ButtonSave onClick={()=> editedUser()}>บันทึก</ButtonSave>,
            }}
        >
            <AlignCenter key={1}>
                <ConfirmModal
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    title={[<TextModal>ออกจากหน้านี้?</TextModal>]}
                    footer={[<ButtonLeaveModal onClick={goBack}>ออก</ButtonLeaveModal>, <ButtonCancleModal onClick={handleCancel}>ยกเลิก</ButtonCancleModal>]}
                >
                    <TextUserInfo2>การเปลี่ยนแปลงทั้งหมดจะไม่ถูกบันทึก</TextUserInfo2>
                </ConfirmModal>
            </AlignCenter>
            <ContainerProfile>
                <AlignCenter>
                    <UserImage src={cred.pic} />
                </AlignCenter>
                <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="username"
                        value={cred.username}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </AlignCenter>
                <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="name"
                        value={cred.name}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </AlignCenter>
                <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="surname"
                        value={cred.surname}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </AlignCenter>
                <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="email"
                        value={cred.email}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                        disabled
                    />
                </AlignCenter>
            </ContainerProfile>
        </Container>
    );
};

export default EditProfile;
