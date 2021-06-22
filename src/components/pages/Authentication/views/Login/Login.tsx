import { useState } from 'react';
import { Form, Space, Row, Col } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { ILogin } from '../../shared/login.interface';
import { ButtonColor, FontTextHeader, BaseInput, LogoPage, MoveCenter, MoveBottom } from 'components/pages/Authentication/shared/style';

import logo from '../../images/logo.png';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onFinish = (values: ILogin) => {
    const mockUser = require('../../mocks/user.json');
    const currentUser = mockUser.find((user: ILogin) => user.email === values.email);

    mockUser.find((user: ILogin) => console.log(user));
    if (values.password === currentUser?.password) {
      history.push('/');
    } else {
      console.log('Failed login');
    }
    console.log('Success:', values);
  };

  function checkdatajson() {
    const mockUser = require('../../mocks/user.json');
    const currentUser = mockUser.find((user: ILogin) => user.email === email);

    mockUser.find((user: ILogin) => console.log(user));
    if (password === currentUser?.password) {
      history.push('/');
    } else {
      console.log('Failed login');
    }
  }

  return (
    <div>
      <MoveCenter>
        <LogoPage src={logo} preview={false} />
        <Space align="start">
          <FontTextHeader>เข้าสู่ระบบ</FontTextHeader>
        </Space>
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'กรุณาใส่อีเมล!',
              },
            ]}
          >
            <BaseInput type="email" placeholder="อีเมล" />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'กรุณาใส่รหัสผ่าน!',
              },
            ]}
          >
            <BaseInput type="password" placeholder="รหัสผ่าน" />
          </Form.Item>

          <Form.Item>
            <ButtonColor onClick={checkdatajson} htmlType="submit">
              เข้าสู่ระบบ
            </ButtonColor>
          </Form.Item>

          <Form.Item>
            <MoveBottom>
              ยังไม่มีบัญชีใช่ไหม? <a onClick={() => history.push('/register')}>สร้างบัญชีกันเถอะ!</a>
            </MoveBottom>
          </Form.Item>
        </Form>
      </MoveCenter>
    </div>
  );
}

export default Login;
