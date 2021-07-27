import { FontTextHeader, MoveCenter } from 'components/pages/Authentication/shared/style';
import logo from '../../images/logo.png';
import Container from 'components/Container/Container';
import { RegisterForm } from './RegisterForm';
import { Box } from 'shared/style/theme/component';
import { Image } from 'antd';

function Register() {
    return (
        <Container header={{ left: 'back' }}>
            <Box direction="row" justify="center" align="flex-start" style={{ padding: '0px 20px 0px 20px', margin: '10px 0px' }}>
                <Box direction="row" justify="center" align="center">
                    <Image src={logo} preview={false} />
                </Box>
            </Box>
            <MoveCenter>
                <FontTextHeader>สร้างบัญชี</FontTextHeader>
                <RegisterForm />
            </MoveCenter>
        </Container>
    );
}

export default Register;
