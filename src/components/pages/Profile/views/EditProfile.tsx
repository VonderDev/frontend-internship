import { useState, useEffect } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IProfile } from '../shared/Profile.interface';
import { Form } from 'antd';
import { ContainerProfile, AlignCenter, ButtonSave, FormInput, UserImage, TextTopicEditProfile , AlignRight} from '../shared/Profile.styles';
import Container from 'components/Container/Container';

function EditProfile() {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    const [userName, setUserName] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleOnChange = (name: string, value: string) => {
        setCred((prev) => ({ ...prev, [name]: value }));
        console.log(cred.username);
    };

    const editedUser = () => {
        console.log(cred);
    };

    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    return (
        <Container header={{ left: 'back', children: 'แก้ไขข้อมูลส่วนตัว' }}>
            <AlignRight><ButtonSave onClick={editedUser}>บันทึก</ButtonSave></AlignRight>
            <ContainerProfile>
                <AlignCenter>
                    <UserImage src={cred.pic} />
                    <form>
                        <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                        <FormInput
                            name="username"
                            value={cred.username}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                        />
                        <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                        <FormInput
                            name="name"
                            value={cred.name}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                        />
                        <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                        <FormInput
                            name="surname"
                            value={cred.surname}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                        />
                        <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                        <FormInput
                            name="email"
                            value={cred.email}
                            onChange={({ target: { value, name } }) => {
                                handleOnChange(name, value);
                            }}
                            disabled
                        />
                    </form>
                    <br />
                </AlignCenter>
            </ContainerProfile>
        </Container>
    );
}

export default EditProfile;
