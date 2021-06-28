import { useState, useEffect, useCallback } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IProfile } from '../shared/Profile.interface';
import { BackHeader } from 'components/Container/Header.styled';
import {
    ContainerProfile,
    AlignCenter,
    ButtonSave,
    ConfirmModal,
    ButtonLeaveModal,
    ButtonCancleModal,
    TextModal,
    TextUserInfo2,
} from '../shared/Profile.styles';
import { ProfileInput } from './ProfileInput';
import { LeftOutlined } from '@ant-design/icons';
import Container from 'components/Container/Container';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    const { ListInput } = ProfileInput();
    // const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    // const [username, setUsername] = useState<string>('');
    // const [name, setName] = useState<string>('');
    // const [surname, setSurname] = useState<string>('');
    // const [email, setEmail] = useState<string>('');

    // const handleOnChange = (name: string, value: string) => {
    //     setCred((prev) => ({ ...prev, [name]: value }));

    // };

    const handleOnClick = () => {
        console.log();
    };

    // async function getStatisticData() {
    //     const response = await API_Profile_Data();
    //     if (response) {
    //         setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
    //     } else {
    //         console.log('error');
    //     }
    // }
    // useEffect(() => {
    //     getStatisticData();
    // }, []);

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
            {/* <AlignRight>
                <ButtonSave onClick={handleOnClick}>บันทึก</ButtonSave>
            </AlignRight> */}
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
                {ListInput}
            </ContainerProfile>
        </Container>
    );
};

export default EditProfile;
