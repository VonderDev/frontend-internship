import { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import {
  FontTextHeader,
  LogoPage,
  MoveCenter,
  PrivacyContainer,
  CheckboxPrivacy,
  DrawerRadius,
  TextAgree,
  TextRegister
} from 'components/pages/Authentication/shared/style';
import { LoginForm } from './LoginForm';
import Container from 'components/Container/Container';
import logo from '../../images/logo.png';
import Privacy from './Privacy';
import { ButtonStyle } from 'shared/style/theme/component';

const Login = () => {

  const [visible, setVisible] = useState<boolean>(false);
  const [placement, setPlacement] = useState<string>('bottom');
  const { loginUser, login } = useAuthContext();
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  function confirmPolicy() {
    history.push('/register');
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  if (loginUser) { return <Redirect to='/' /> }
  return (
    <Container header={{ left: 'back', right: 'menu' }}>
      <PrivacyContainer>
        <LogoPage src={logo} preview={false} />
        <MoveCenter>
          <DrawerRadius
            title="นโยบายความเป็นส่วนตัว"
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
            <CheckboxPrivacy checked={checked} onChange={() => { setChecked(prev => !prev) }} >
              <TextAgree> I've read and agreed to the <span style={{ color: '#3A8CE4', fontWeight: 'bold' }}>Privacy Policy</span></TextAgree>
            </CheckboxPrivacy>
            <ButtonStyle typebutton="Large" sizebutton={95} onClick={confirmPolicy} htmlType="submit" disabled={!checked}>
              ยืนยัน
            </ButtonStyle>
          </DrawerRadius>
          <FontTextHeader>เข้าสู่ระบบ</FontTextHeader>
          <LoginForm />
          <TextRegister>
            ไม่มีบัญชีใช่ไหม? <a onClick={showDrawer} style={{ fontWeight: 'bold' }}>สร้างบัญชีกันเถอะ!</a>
          </TextRegister>
        </MoveCenter>
      </PrivacyContainer>
    </Container>
  );
}

export default Login;