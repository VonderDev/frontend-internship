import { memo, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { API_GET_USER_Data , API_PUT_USER_DATA } from '../apis/profile.api';
import { IUser } from '../shared/Profile.interface';
import { ButtonSave, ContainerProfile, FormInput, TextTopicEditProfile, UserImage } from '../shared/Profile.styles';
import { Form } from 'antd';
import ProfileMascot from '../../Profile/images/ProfileMascot.png'
export const ProfileInput = memo(() => {
    const [userInfo, setUserInfo] = useState<IUser>({ firstName: '', lastName: '', email: '',  username: '' });
    async function getStatisticData() {
        const response = await API_GET_USER_Data();
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
        API_PUT_USER_DATA(
            userInfo
        )
    };

    return (
        <>
        <ButtonSave htmlType="submit" onClick={putDataOnClick}>บันทึก</ButtonSave>
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
        </>
    );
});
