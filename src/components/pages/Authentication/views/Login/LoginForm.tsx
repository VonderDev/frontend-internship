import { useState } from "react";
import { Form } from 'antd';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import { Box } from 'shared/style/theme/component';

import {
    FormItemTextValidate,
    FormLogin
} from "components/pages/Authentication/shared/style"
import { ButtonStyle, InputStyle } from "shared/style/theme/component";

export const LoginForm = () => {

    const { hide, login } = useAuthContext();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <>
        <FormLogin layout="horizontal">
            {hide? null :
            (<Box justify='center' align='center' direction='row'>
            <p style={{color:'red'}}>อีเมลและรหัสผ่านที่คุณกรอกไม่ตรงกับข้อมูลในระบบ โปรดตรวจสอบและลองอีกครั้ง </p>
            </Box>
            )}
            <FormItemTextValidate name="email" rules={[{ required: true, message: 'กรุณากรอกอีเมล!' }]} >
                <InputStyle sizeinput={100} type="email" placeholder="อีเมล" onChange={({ target: { value } }) => { setEmail(value) }} />
            </FormItemTextValidate>

            <FormItemTextValidate name="password" rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน!' }]} >
                <InputStyle sizeinput={100} type="password" placeholder="รหัสผ่าน" onChange={({ target: { value } }) => { setPassword(value) }} />
            </FormItemTextValidate>
            
            <ButtonStyle typebutton="Large" sizebutton={100} htmlType="submit" onClick={() => login({ email, password })} >
                เข้าสู่ระบบ
            </ButtonStyle>

        </FormLogin>
        </>
    );
}