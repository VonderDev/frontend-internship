import { useState } from "react";
import { ILogin } from "../../shared/login.interface";
import { useHistory } from 'react-router';
import { API_PostDataUser } from "../../apis/user.api";
import { useEffect } from "react";
import { ButtonStyle, InputStyle } from "shared/style/theme/component";
import { FormItemTextValidate, FormLogin } from "../../shared/style";
import axios from "axios";
  
  export const RegisterForm = () => {
      
      const [username, setUsername] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const history = useHistory();
      const [userData, setUserData] = useState<Array<ILogin> | null>(null);
      
      const onSuccess = (values: ILogin) => {
          const mockUser = require('../../mocks/user.json');
          
          mockUser.find((user: ILogin) => console.log(user));
          if (values.username === username || values.email === email) {
              console.log(values);
              message: "มีผู้ใช้บัญชีนี้แล้ว"
            } else {
                console.log("Go to home")
                history.push('/');
                console.log('Success:', values);
            }
        };
        
        function checkdatajson() {
            const mockUser = require('../../mocks/user.json');
            const currentUser = mockUser.find((user: ILogin) => user.email === email);
            
            mockUser.find((user: ILogin) => console.log(user));
            if (password === currentUser?.password) {
                console.log("Go to home")
                history.push('/');
                history.push('/home');
            } else {
                message: "มีผู้ใช้บัญชีนี้แล้ว"
                console.log('Failed login');
            }
        }

        async function registerUser() {
            let user = {username, firstName, lastName, email, password}
            console.warn(user);

            let result = await fetch("http://localhost:5000/signup", {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type" : 'application/json',
                    "Accept" : 'application/json'
                }
            })
            result = await result.json()
            console.warn("result : ", result)
        }

    return (
        
        <FormLogin layout="horizontal">
            <FormItemTextValidate name="username" rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]} >
                <InputStyle sizeinput={100} type="text" value={username} placeholder="ชื่อผู้ใช้" onChange={({ target: { value } }) => { setUsername(value) }}/>
            </FormItemTextValidate>

            <FormItemTextValidate name="firstname" rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]} >
                <InputStyle sizeinput={100} type="text" value={firstName} placeholder="ชื่อจริง" onChange={({ target: { value } }) => { setFirstName(value) }}/>
            </FormItemTextValidate>

            <FormItemTextValidate name="lastname" rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]} >
                <InputStyle sizeinput={100} type="text" value={lastName} placeholder="นามสกุล" onChange={({ target: { value } }) => { setLastName(value) }}/>
            </FormItemTextValidate>

            <FormItemTextValidate name="email" rules={[{ required: true, message: 'กรุณากรอกอีเมล' }]} >
                <InputStyle sizeinput={100} type="email" value={email} placeholder="อีเมล" onChange={({ target: { value } }) => { setEmail(value) }}/>
            </FormItemTextValidate>

            <FormItemTextValidate name="password" rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]} >
                <InputStyle sizeinput={100} type="password" value={password} placeholder="รหัสผ่าน" onChange={({ target: { value } }) => { setPassword(value) }}/>
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


                <ButtonStyle typebutton="Large" sizebutton={100} style={{ marginBottom: "15px"}} htmlType="submit" onClick={registerUser} >
                    สร้างบัญชี
                </ButtonStyle>

        </FormLogin>
    );
}