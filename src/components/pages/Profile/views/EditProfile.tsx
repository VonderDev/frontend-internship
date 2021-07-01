import { useState } from 'react';
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
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const history = useHistory();

    const handleOk = () => {
        history.goBack();
        setIsModalVisible(false);
    };

    return (
        <>
            <ConfirmModal
                visible={isModalVisible}
                onOk={handleOk} 
                onCancel={handleCancel}
                title={<TextHeadModal>ออกจากหน้านี้?</TextHeadModal>}
                footer={[
                        <ButtonLeaveModal key='back' onClick={handleOk}>ออก</ButtonLeaveModal>,
                        <ButtonCancleModal key='submit' onClick={handleCancel}>ยกเลิก</ButtonCancleModal>
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
                    right: '',
                }}
            >
                <ProfileInput />
            </Container>
        </>
    );
};

export default EditProfile;
