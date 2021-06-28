import { useState, useEffect, useCallback } from 'react';
import { BackHeader } from 'components/Container/Header.styled';
import { ButtonSave, ConfirmModal, ButtonLeaveModal, ButtonCancleModal, TextHeadModal, TextBodyModal} from '../shared/Profile.styles';
import { ProfileInput } from './ProfileInput';
import { LeftOutlined } from '@ant-design/icons';
import Container from 'components/Container/Container';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    const handleOnClick = () => {
        console.log();
    };
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
                children: 'แก้ไขข้อมูลส่วนตัว',
                right: <ButtonSave onClick={handleOnClick}>บันทึก</ButtonSave>,
            }}
        >
            <ConfirmModal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                title={[<TextHeadModal>ออกจากหน้านี้?</TextHeadModal>]}
                footer={[<ButtonLeaveModal onClick={goBack}>ออก</ButtonLeaveModal>, <ButtonCancleModal onClick={handleCancel}>ยกเลิก</ButtonCancleModal>]}
            >
                <TextBodyModal>การเปลี่ยนแปลงทั้งหมดจะไม่ถูกบันทึก</TextBodyModal>
            </ConfirmModal>
            <ProfileInput/>
        </Container>
    );
};

export default EditProfile;
