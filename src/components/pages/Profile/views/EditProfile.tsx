import { useState, useEffect } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IProfile } from '../shared/Profile.interface';
import { Form } from 'antd';
import { Container, MoveCenter, ButtonSubmit, BgColor, FormInput, UserImage, TextTopic, TextUserInfo } from '../shared/Profile.styles';

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
        <div>
            <BgColor>
                <Container>
                    <MoveCenter>
                        <TextTopic>แก้ไขข้อมูลส่วนตัว</TextTopic>
                        <UserImage src={cred.pic} />
                        <form>
                            <TextUserInfo>ชื่อผู้ใช้</TextUserInfo>
                            <FormInput
                                name="username"
                                value={cred.username}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                            <TextUserInfo>อีเมล</TextUserInfo>
                            <FormInput
                                name="email"
                                value={cred.email}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                                disabled
                            />
                            <TextUserInfo>ชื่อจริง</TextUserInfo>
                            <FormInput
                                name="name"
                                value={cred.name}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                            <TextUserInfo>นามสกุล</TextUserInfo>
                            <FormInput
                                name="surname"
                                value={cred.surname}
                                onChange={({ target: { value, name } }) => {
                                    handleOnChange(name, value);
                                }}
                            />
                        </form>
                        <br />
                        <Form.Item>
                            <ButtonSubmit onClick={editedUser}>ยืนยันการเปลี่ยนแปลง</ButtonSubmit>
                        </Form.Item>
                    </MoveCenter>
                </Container>
            </BgColor>
        </div>
    );
}

export default EditProfile;
