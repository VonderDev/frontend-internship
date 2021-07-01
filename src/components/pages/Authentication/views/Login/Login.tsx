import { useState } from 'react';
import { Form } from 'antd';
import { useHistory, Redirect } from 'react-router-dom';
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
    TextAgree,
} from 'components/pages/Authentication/shared/style';
import Container from 'components/Container/Container';
import logo from '../../images/logo.png';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import Privacy from './Privacy';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const [placement, setPlacement] = useState<string>('bottom');
    const { user, login, token } = useAuthContext();
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

    if (token) {
        return <Redirect to="/" />;
    }
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
                        <CheckboxPrivacy
                            checked={checked}
                            onChange={() => {
                                setChecked((prev) => !prev);
                            }}
                        >
                            <TextAgree>
                                {' '}
                                I've read and agreed to the <span style={{ color: '#3A8CE4', fontWeight: 'bold' }}>Privacy Policy</span>
                            </TextAgree>
                        </CheckboxPrivacy>
                        <ButtonColor onClick={confirmPolicy} htmlType="submit" disabled={!checked}>
                            ยืนยัน
                        </ButtonColor>
                    </DrawerRadius>

                    <FontTextHeader>เข้าสู่ระบบ</FontTextHeader>
                    <Form initialValues={{ remember: true }} layout="horizontal">
                        <FormItem name="email" rules={[{ required: true, message: 'กรุณาใส่อีเมล!' }]}>
                            <BaseInput
                                type="email"
                                placeholder="อีเมล"
                                onChange={({ target: { value } }) => {
                                    setEmail(value);
                                }}
                            />
                        </FormItem>

                        <FormItem name="password" rules={[{ required: true, message: 'กรุณาใส่รหัสผ่าน!' }]}>
                            <BaseInput
                                type="password"
                                placeholder="รหัสผ่าน"
                                onChange={({ target: { value } }) => {
                                    setPassword(value);
                                }}
                            />
                        </FormItem>

                        <FormItem>
                            <ButtonColor htmlType="submit" onClick={() => login({ email, password })}>
                                เข้าสู่ระบบ
                            </ButtonColor>
                        </FormItem>

                        <Form.Item>
                            <TextRegister>
                                ไม่มีบัญชีใช่ไหม?{' '}
                                <a onClick={showDrawer} style={{ fontWeight: 'bold' }}>
                                    สร้างบัญชีกันเถอะ!
                                </a>
                            </TextRegister>
                        </Form.Item>
                    </Form>
                </MoveCenter>
            </PrivacyContainer>
        </Container>
    );
};

export default Login;
