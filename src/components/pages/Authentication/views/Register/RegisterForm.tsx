import { useState, useCallback } from "react";
import { ILogin } from "../../shared/login.interface";
import { useHistory } from 'react-router';
import { API_PostDataUser } from "../../apis/user.api";
import { ButtonStyle, InputStyle } from "shared/style/theme/component";
import { FormItemTextValidate, FormLogin } from "../../shared/style";

export const RegisterForm = () => {

    const history = useHistory();
    const [userData, setUserData] = useState<ILogin>({ firstName: '', lastName: '', email: '', username: '', password: '' });

    async function PostUser() {
        if (userData.username && userData.firstName && userData.lastName && userData.email && userData.password) {
            const response = await API_PostDataUser(userData)
            if(response){
                history.push("/login");
                console.log("Go to login [from api]")
            } else {
                
            }
        } else {
            console.log("ไม่ได้กรอก")
        }
    }

    const handleOnChange = (name: string, value: string) => {
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    return (

        <FormLogin layout="horizontal">
            <FormItemTextValidate name="username" rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]} >
                <InputStyle sizeinput={100} type="text" name="username" value={userData.username} placeholder="ชื่อผู้ใช้" onChange={({ target: { value, name } }) => { handleOnChange(name, value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="firstname" rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]} >
                <InputStyle sizeinput={100} type="text" name="firstName" value={userData.firstName} placeholder="ชื่อจริง" onChange={({ target: { value, name } }) => { handleOnChange(name, value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="lastname" rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]} >
                <InputStyle sizeinput={100} type="text" name="lastName" value={userData.lastName} placeholder="นามสกุล" onChange={({ target: { value, name } }) => { handleOnChange(name, value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="email" rules={[{ required: true, message: 'กรุณากรอกอีเมล' }]} >
                <InputStyle sizeinput={100} type="email" name="email" value={userData.email} placeholder="อีเมล" onChange={({ target: { value, name } }) => { handleOnChange(name, value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="password" rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]} >
                <InputStyle sizeinput={100} type="password" name="password" value={userData.password} placeholder="รหัสผ่าน" onChange={({ target: { value, name } }) => { handleOnChange(name, value) }} />
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
                            if (!value || userData.password === value) {
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