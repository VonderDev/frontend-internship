import { useState } from "react";
import { ILogin } from "../../shared/login.interface";
import { useHistory } from 'react-router';
import { API_PostDataUser } from "../../apis/user.api";
import { useEffect } from "react";
import { ButtonStyle, InputStyle } from "shared/style/theme/component";
import { FormItemTextValidate, FormLogin } from "../../shared/style";
import axios from "axios";
import useSWR from "swr";
import { ApiGetUserData } from "components/pages/Profile/apis/profile.api";

export const RegisterForm = () => {

    const history = useHistory();
    const [userData, setUserData] = useState<ILogin>({ firstName: '', lastName: '', email: '', username: '', password: '' });
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function ApiRegister() {

        const userData = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        if (username && firstName && lastName && email && password) {
            try {
                const { data } = await axios.post("http://localhost:5000/signup", userData)
                if (data) {
                    console.log(data);
                    console.log("Go to login");
                    history.push("/login");
                }
            } catch (error) {
                console.log(error)
                console.log("Failed");
                return error.message
            }
        }
    }

    async function PostUser() {
        if (userData.username && userData.firstName && userData.lastName && userData.email && userData.password){
            try {
                API_PostDataUser(userData);
            } catch (error) {
                console.log(error);
                console.log("API failed");
                return error.message;
            }
        } 
    }

    useEffect(() => {
        if(userData) {
            // setUserData()
        }
    }, [userData])

    return (

        <FormLogin layout="horizontal">
            <FormItemTextValidate name="username" rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]} >
                <InputStyle sizeinput={100} type="text" value={userData.username} placeholder="ชื่อผู้ใช้" onChange={({ target: { value } }) => { setUsername(value); }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="firstname" rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]} >
                <InputStyle sizeinput={100} type="text" value={userData.firstName} placeholder="ชื่อจริง" onChange={({ target: { value } }) => { setFirstName(value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="lastname" rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]} >
                <InputStyle sizeinput={100} type="text" value={userData.lastName} placeholder="นามสกุล" onChange={({ target: { value } }) => { setLastName(value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="email" rules={[{ required: true, message: 'กรุณากรอกอีเมล' }]} >
                <InputStyle sizeinput={100} type="email" value={userData.email} placeholder="อีเมล" onChange={({ target: { value } }) => { setEmail(value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="password" rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]} >
                <InputStyle sizeinput={100} type="password" value={userData.password} placeholder="รหัสผ่าน" onChange={({ target: { value } }) => { setPassword(value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="confirm"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'กรุณายืนยันรหัสผ่าน',
                    },
                    {
                        validator(_, value) {
                            if (!value || password === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('รหัสผ่านที่กรอกไม่ตรงกัน โปรดลองอีกครั้ง'));
                        },
                    },
                ]} >
                <InputStyle sizeinput={100} type="password" placeholder="ยืนยันรหัสผ่าน" />
            </FormItemTextValidate>

            <ButtonStyle typebutton="Large" sizebutton={100} style={{ marginBottom: "15px" }} htmlType="submit" onClick={PostUser} >
                สร้างบัญชี
            </ButtonStyle>

        </FormLogin>
    );
}