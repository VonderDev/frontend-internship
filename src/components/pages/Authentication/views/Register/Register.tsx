import { Form, Space } from 'antd';
import styled from 'styled-components';
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

  const onFinish = (values: ILogin) => {
    const mockUser = require('../../mocks/user.json');
    const currentUser = mockUser.find((user: ILogin) => user.username === values.username && user.email === values.email);

    mockUser.find((user: ILogin) => console.log(user));
    if (values.username === currentUser?.username || values.email === currentUser?.email) {
      console.log(values);
    } else {
      console.log("Go to login")
      history.push('/login');
    }
    console.log('Success:', values);
  };

  return (
    <Container header={{ left: 'back' }}>
      <LogoPageCenter>
        <LogoPage src={logo} preview={false} />
      </LogoPageCenter>
      <FontTextHeader>
        สร้างบัญชี
      </FontTextHeader>
      <MoveCenter>
        <Form onFinish={onFinish} validateMessages={validateMessages} >
          <Form.Item name={['user', 'first_name']} hasFeedback rules={[{ required: true, message: 'กรุณาใส่ชื่อจริง!' }]} >
            <BaseInput type="text" placeholder="ชื่อจริง" />
          </Form.Item>
          <Form.Item name={['user', 'last_name']} hasFeedback rules={[{ required: true, message: 'กรุณาใส่นามสกุล!' }]} >
            <BaseInput type="text" placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item name={['user', 'username']} hasFeedback rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้!' }]} >
            <BaseInput type="text" placeholder="ชื่อผู้ใช้" />
          </Form.Item>
          <Form.Item name={['user', 'email']} hasFeedback rules={[{ required: true, message: 'กรุณาใส่อีเมล!' }]} >
            <BaseInput type="email" placeholder="อีเมล" />
          </Form.Item>
          <Form.Item name="password"
            rules={[
              {
                required: true,
                message: 'กรุณาใส่รหัสผ่าน!',
              },
            ]}
            hasFeedback >
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
                  return Promise.reject(new Error('รหัสผ่านยืนยันไม่ตรงกัน!'));
                },
              }),
            ]} >
            <BaseInput type="password" placeholder="ยืนยันรหัสผ่าน" />
          </Form.Item>
          <Form.Item>
            <ButtonColor htmlType="submit">
              สร้างบัญชี
            </ButtonColor>
          </Form.Item>
        </Form>
      </MoveCenter>
    </Container>
  );
}

export default Register;
