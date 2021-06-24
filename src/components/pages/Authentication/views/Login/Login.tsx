import { useState } from 'react';
import { Form } from 'antd';
import { useHistory } from 'react-router-dom';

import { ILogin } from '../../shared/login.interface';
import {
  ButtonColor,
  FontTextHeader,
  FormItem,
  BaseInput,
  LogoPage,
  MoveCenter,
  PrivacyContainer,
  CheckboxPrivacy,
  DrawerRadius,
  TextRegister,
  TextAgree
} from 'components/pages/Authentication/shared/style';

import Container from 'components/Container/Container';

import logo from '../../images/logo.png';
import Privacy from './Privacy';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<string>('bottom');
  const [checked, setChecked] = useState(false);

  const onFinish = (values: ILogin) => {
    const mockUser = require('../../mocks/user.json');
    const currentUser = mockUser.find((user: ILogin) => user.email === values.email && user.password === values.password);

    mockUser.find((user: ILogin) => console.log(user));
    if (values.password === currentUser?.password) {
      history.push('/');
      console.log('Success:', values);
    } else {
      console.log('Failed login');
    }
  };

  function checkdatajson() {
    const mockUser = require('../../mocks/user.json');
    const currentUser = mockUser.find((user: ILogin) => user.email === email);

    mockUser.find((user: ILogin) => console.log(user));
    if (email === currentUser?.email &&  password === currentUser?.password) {
      history.push('/home');
    } else {
      console.log('Failed login');
    }
  }

  function confirmPolicy() {
    history.push('/register');
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Container header={{ left: 'back', right: 'menu' }}>
      <PrivacyContainer>
        <LogoPage src={logo} preview={false} />
        <MoveCenter>
          <DrawerRadius
            title="Privacy Policy"
            placement="bottom"
            closable={false}
            onClose={onClose}
            visible={visible}
            key={placement}
            getContainer={false}
            height={650}
            style={{ position: 'absolute', overflowY: 'hidden' }}
          >
              <Privacy />
            <CheckboxPrivacy checked={checked} onChange={() => { setChecked( prev => !prev )}} >
              <TextAgree> I've read and agreed to the <span style={{ color: '#3A8CE4', fontWeight: 'bold' }}>Privacy Policy</span></TextAgree>
            </CheckboxPrivacy>
            <ButtonColor onClick={confirmPolicy} htmlType="submit" disabled={!checked}>
              ยืนยัน
            </ButtonColor>
          </DrawerRadius>

          <FontTextHeader>เข้าสู่ระบบ</FontTextHeader>
          <Form initialValues={{ remember: true }} onFinish={onFinish} layout="horizontal">

              <FormItem name="email"  rules={[{ required: true, message: 'กรุณาใส่อีเมล!' }]} >
                <BaseInput type="email" placeholder="อีเมล" />
              </FormItem>

              <FormItem name="password"  rules={[{ required: true, message: 'กรุณาใส่รหัสผ่าน!' }]} >
                <BaseInput type="password" placeholder="รหัสผ่าน" />
              </FormItem>

            <FormItem>
              <ButtonColor onClick={checkdatajson} htmlType="submit">
                เข้าสู่ระบบ
              </ButtonColor>
            </FormItem>

            <Form.Item>
              <TextRegister>
                ไม่มีบัญชีใช่ไหม? <a onClick={showDrawer} style={{ fontWeight: 'bold' }}>สร้างบัญชีกันเถอะ!</a>
              </TextRegister>
            </Form.Item>
          </Form>
        </MoveCenter>
      </PrivacyContainer>
    </Container>
  );

}

export default Login;