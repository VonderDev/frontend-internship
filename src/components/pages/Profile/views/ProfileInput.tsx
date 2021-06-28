import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IInput, IProfile } from '../shared/Profile.interface';
import { FormInput, TextTopicEditProfile, UserImage } from '../shared/Profile.styles';

export const ProfileInput = () => {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    const listInput: Array<IInput> = [];
    for (let i = 0; i < 4; i++) {
        listInput.push({
            username: cred.username,
            name: cred.name,
            surname: cred.surname,
            email: cred.email,
            pic: cred.pic
        });
    }

    const handleOnChange = (name: string, value: string) => {
        setCred((prev) => ({ ...prev, [name]: value }));
    };

    const ListInput = useMemo(() => {
        listInput.map((item) => {
            return (
                <div>
                    <UserImage src={item.pic} />
                    <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                    <FormInput
                        name="username"
                        value={item.username}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                    <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                    <FormInput
                        name="name"
                        value={item.name}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                    <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                    <FormInput
                        name="surname"
                        value={item.surname}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                    <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                    <FormInput
                        name="email"
                        value={item.email}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </div>
            );
        });
    }, []);

    return {
        ListInput
    };
};
