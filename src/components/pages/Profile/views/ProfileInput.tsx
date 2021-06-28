import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IInput, IProfile } from '../shared/Profile.interface';
import { AlignCenter, FormInput, TextTopicEditProfile, UserImage } from '../shared/Profile.styles';

export const ProfileInput = () => {
    const [userInfo, setUserInfo] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setUserInfo((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
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

    const ListInput = useMemo(() => {
        return (
            <AlignCenter>
                <UserImage src={userInfo.pic} />
                <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                <FormInput
                    name="username"
                    value={userInfo.username}
                    onChange={({ target: { value, name } }) => {
                        handleOnChange(name, value);
                    }}
                />
                <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                <FormInput
                    name="name"
                    value={userInfo.name}
                    onChange={({ target: { value, name } }) => {
                        handleOnChange(name, value);
                    }}
                />
                <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                <FormInput
                    name="surname"
                    value={userInfo.surname}
                    onChange={({ target: { value, name } }) => {
                        handleOnChange(name, value);
                    }}
                />
                <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                <FormInput
                    name="email"
                    value={userInfo.email}
                    onChange={({ target: { value, name } }) => {
                        handleOnChange(name, value);
                    }}
                />
            </AlignCenter>
        );
    }, [userInfo]);

    return {
        ListInput,
    };
};
