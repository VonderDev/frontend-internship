import { memo, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IProfile } from '../shared/Profile.interface';
import { ContainerProfile, FormInput, TextTopicEditProfile, UserImage } from '../shared/Profile.styles';
import { Form } from 'antd';

export const ProfileInput = memo(() => {
    const [userInfo, setUserInfo] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setUserInfo((prevState) => ({
                ...prevState,
                name: response.name,
                surname: response.surname,
                email: response.email,
                result: response.result,
                pic: response.pic,
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

    
        return (
            <ContainerProfile>
                <UserImage src={userInfo.pic} />
                <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                <Form>
                    <Form.Item name="username" rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้!' }]}>
                        <FormInput
                            name="username"
                            value={userInfo.username}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                        />
                    </Form.Item>
                    <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                    <Form.Item name="name" rules={[{ required: true, message: 'กรุณาใส่ชื่อจริง!' }]}>
                        <FormInput
                            name="name"
                            value={userInfo.name}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                        />
                    </Form.Item>
                    <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                    <Form.Item name="surname" rules={[{ required: true, message: 'กรุณาใส่นามสกุล!' }]}>
                        <FormInput
                            name="surname"
                            value={userInfo.surname}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                        />
                    </Form.Item>
                    <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                    <Form.Item name="email" rules={[{ required: true, message: 'กรุณาใส่อีเมล!' }]}>
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
        );
    

});
