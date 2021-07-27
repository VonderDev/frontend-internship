import { FontTextHeader, LogoPage, MoveCenter, LogoPageCenter } from 'components/pages/Authentication/shared/style';
import logo from '../../images/logo.png';
import Container from 'components/Container/Container';
import { RegisterForm } from './RegisterForm';

function Register() {
    return (
        <Container header={{ left: 'back' }}>
            <LogoPageCenter>
                <LogoPage src={logo} preview={false} />
            </LogoPageCenter>
            <MoveCenter>
                <FontTextHeader>สร้างบัญชี</FontTextHeader>
                <RegisterForm />
            </MoveCenter>
        </Container>
    );
}

export default Register;
