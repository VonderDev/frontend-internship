import { Form, Space } from 'antd';
import styled from 'styled-components';
import { ButtonColor, FontTextHeader, BaseInput, LogoPage } from 'components/pages/Authentication/shared/style';
import { useHistory } from 'react-router';

import logo from '../../images/logo.png';

const validateMessages = {
  required: 'required!',
  types: {
    email: 'not a valid email!',
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const MoveCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MoveBomttom = styled(Form.Item)`
    position: absolute;
    bottom: 2rem;
`;

function Register() {

  const history = useHistory();

  return (
    <div>
      <MoveCenter>
        <LogoPage src={logo} preview={false} />
        <Space align="start">
          <FontTextHeader>
            สร้างบัญชี
          </FontTextHeader>
        </Space>
        <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} onClick={() => history.push('/login')} >
          <Form.Item name={['user', 'first_name']} rules={[{ required: true, message: 'กรุณาใส่ชื่อจริง!'}]} >
            <BaseInput type="text" placeholder="ชื่อจริง" />
          </Form.Item>
          <Form.Item name={['user', 'last_name']} rules={[{ required: true, message: 'กรุณาใส่นามสกุล!' }]} >
            <BaseInput type="text" placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item name={['user', 'username']} rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้!' }]} >
            <BaseInput type="text" placeholder="ชื่อผู้ใช้" />
          </Form.Item>
          <Form.Item name={['user', 'email']} rules={[{ type: 'email', message: 'กรุณาใส่อีเมล!' }]} >
            <BaseInput type="email" placeholder="อีเมล" />
          </Form.Item>
          <Form.Item name={['user', 'password']} rules={[{ required: true, message: 'กรุณาใส่รหัสผ่าน!' }]} >
            <BaseInput type="password" placeholder="รหัสผ่าน" />
          </Form.Item>
          <Form.Item name={['user', 'repeat_password']} rules={[{ required: true, message: 'กรุณาใส่รหัสผ่าน!' }]} >
            <BaseInput type="password" placeholder="ยืนยันรหัสผ่าน" />
          </Form.Item>
          <Form.Item>
            <ButtonColor htmlType="submit">
              Submit
            </ButtonColor>
          </Form.Item>
        </Form>
      </MoveCenter>
    </div>
  );
}

export default Register;
