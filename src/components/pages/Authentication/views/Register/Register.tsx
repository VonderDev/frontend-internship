import { Form } from 'antd';
import { ButtonColor, FontTextHeader, BaseInput, LogoPage, MoveCenter, LogoPageCenter } from 'components/pages/Authentication/shared/style';
import { useHistory } from 'react-router';

import logo from '../../images/logo.png';
import { useState } from 'react';
import { ILogin } from '../../shared/login.interface';
import Container from 'components/Container/Container';

const validateMessages = {
  required: 'required!',
  types: {
    email: 'not a valid email!',
  },
};

function Register() {

  const history = useHistory();
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [checked, setChecked] = useState(false);

  const onFinish = (values: ILogin) => {
    const mockUser = require('../../mocks/user.json');
    const currentUser = mockUser.find((user: ILogin) => user.username === values.username && user.email === values.email);

    mockUser.find((user: ILogin) => console.log(user));
    if (values.username === username || values.email === email) {
      console.log(values);
      message : "มีผู้ใช้บัญชีนี้แล้ว"
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
      history.push('/home');
    } else {
      console.log('Failed login');
    }
  }

  return (
    <Container header={{ left: 'back' }}>
      <LogoPageCenter>
        <LogoPage src={logo} preview={false} />
      </LogoPageCenter>
      <FontTextHeader>
        สร้างบัญชี
      </FontTextHeader>
      <MoveCenter>
        <Form onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'username']} hasFeedback rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]} >
            <BaseInput type="text" placeholder="ชื่อผู้ใช้" />
          </Form.Item>
          <Form.Item name={['user', 'first_name']} hasFeedback rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]} >
            <BaseInput type="text" placeholder="ชื่อจริง" />
          </Form.Item>
          <Form.Item name={['user', 'last_name']} hasFeedback rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]} >
            <BaseInput type="text" placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item name={['user', 'email']} hasFeedback rules={[{ required: true, message: 'กรุณากรอกอีเมล' }]} >
            <BaseInput type="email" placeholder="อีเมล" />
          </Form.Item>
          <Form.Item name="password" hasFeedback rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]} >
            <BaseInput type="password" placeholder="รหัสผ่าน" />
          </Form.Item>
          <Form.Item name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'กรุณายืนยันรหัสผ่าน',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('รหัสผ่านที่กรอกไม่ตรงกัน โปรดลองอีกครั้ง'));
                },
              }),
            ]} >
            <BaseInput type="password" placeholder="ยืนยันรหัสผ่าน" />
          </Form.Item>
          <Form.Item>
            <ButtonColor htmlType="submit" onClick={checkdatajson} >
              สร้างบัญชี
            </ButtonColor>
          </Form.Item>
        </Form>
      </MoveCenter>
    </Container>
  );
}

export default Register;
