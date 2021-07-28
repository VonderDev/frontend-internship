import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListMenu } from './ListMenu';
import styled, { css } from 'styled-components';
import { MenuOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Button, Spin, Image } from 'antd';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import LoadingPage from 'components/AuthContext/LoadingPage';
import axios from 'axios';
import ProfileMascot from '../Profile/images/ProfileMascot.png';
import { Box } from 'shared/style/theme/component';

const { Header, Sider } = Layout;

const Bar = styled(Link)`
    margin-top: 10px;
    font-size: 2rem;
    background: none;
    width: 100%;
`;
const BarBtn = styled(Bar)`
    display: flex;
    justify-content: center;
`;

const Navmenu = styled(Menu)<{ active: 'active' | '' }>`
    background-color: var(--White);
    width: 250px;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    position: fixed;
    top: 0;
    right: -100vh;
    box-shadow: 0 3px 6px #e0e0e0 !important;
    transition: 850ms;
    z-index: 100;
    ${({ active }) => {
        if (active === 'active') {
            return css`
                right: 0%;
                transition: 350ms;
            `;
        }
    }}
`;

const Overlay = styled.div<{ active: 'active' | '' }>`
    ${({ active }) => {
        if (active === 'active') {
            return css`
                position: fixed;
                display: flex;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100%;
                background-color: #0c1066;
                opacity: 0.3;
                z-index: 99;
            `;
        }
    }}
`;
const Ul = styled.ul`
    width: 100%;
`;
const Listmenu = styled.li`
    font-weight: 500 !important;
    &.nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 12px 0px;
        list-style: none;
        height: 60px;
    }
    &.nav-text a {
        text-decoration: none;
        color: var(--Black);
        font-size: 18px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 15%;
        border-radius: 4px;
    }
    &.nav-text a:hover {
        background-color: var(--Blue-300);
        color: var(--White);
    }
`;

const Span = styled.span`
    margin-left: 16px;
`;
const Avataruser = styled.div`
    padding: 20px 0px;
    background-color: #FAFAFC;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const AvatarName = styled.span`
    margin-top: 30px;
    font-size: 22px;
    font-weight: bolder !important;
`;

const LoginBtn = styled(Button)`
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    margin: 10px 0 0 0;
    box-shadow: 0 3px 6px #e0e0e0;
`;
const ListmenuLogout = styled(Listmenu)`
    bottom: 30px;
    display: flex;
    position: absolute;
    width: 100%;

`;
const UserImg = styled(Image)`
    width: 110px;
    height: 110px;
    border-radius: 90px;
`;

const Burger = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [username, setUsername] = useState('');
    const token = localStorage.getItem('token');
    const { logout, getUser, user } = useAuthContext();
    function delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const getUserInfo = async () => {
        const token = localStorage.getItem('token');
        const response = await getUser();
        if (token) {
            if (response) {
                setUsername(response.username);
                console.log('UserName :', response.username);
            } else {
                console.log('error');
            }
        } else {
            console.log('none');
        }
    };

    useEffect(() => {
        if (token) {
            getUserInfo();
        } else {
            window.location.reload;
        }
    }, []);

    return (
        <>
        <div onClick={showSidebar}>
        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.2963 12.0001C4.2963 11.0532 5.01754 10.2858 5.90741 10.2858H27.3889C28.2788 10.2858 29 11.0532 29 12.0001C29 12.9469 28.2788 13.7143 27.3889 13.7143H5.90741C5.01754 13.7143 4.2963 12.9469 4.2963 12.0001Z" fill="#BEC3CE"/>
        <path d="M27.3889 20.5714C28.2788 20.5714 29 21.3389 29 22.2857C29 23.2326 28.2788 24 27.3889 24H10.2037C9.31384 24 8.5926 23.2326 8.5926 22.2857C8.5926 21.3389 9.31384 20.5714 10.2037 20.5714H27.3889Z" fill="#BEC3CE"/>
        <path d="M0 1.71428C0 0.767425 0.72124 0 1.61111 0H27.3889C28.2788 0 29 0.767425 29 1.71428C29 2.66113 28.2788 3.42856 27.3889 3.42856H1.61111C0.72124 3.42856 0 2.66113 0 1.71428Z" fill="#BEC3CE"/>
        </svg>
        </div>
            {/* <MenuOutlined style={{ color: '#8a8888', fontSize: '24px' }} onClick={showSidebar} /> */}
            <Overlay active={sidebar ? 'active' : ''} onClick={showSidebar} />
            <Navmenu active={sidebar ? 'active' : '' }>
                <Ul onClick={showSidebar}>
                    <Avataruser>
                            <Box align="center" justify="center" direction="column">
                            {token ? (
                                <>
                                    <UserImg src={ProfileMascot} />
                                    <AvatarName>{username}</AvatarName>
                                </>
                                ) : (  
                                <>
                                    <Avatar size={110} icon={<UserOutlined />} />
                                    <AvatarName> Guest #000 </AvatarName>
                                </>
                                  )}
                            </Box>
                    </Avataruser>
                    {token ? null : (
                         <Box align="center" justify="center" direction="row">
                            <BarBtn to="/login">
                                <LoginBtn type="primary">เข้าสู่ระบบ</LoginBtn>
                            </BarBtn>
                        </Box>
                        )}
                    {token && (
                        <Listmenu className="nav-text">
                            <Bar to="/profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.86302 15.497C10.9635 15.497 13.477 12.9836 13.477 9.88304C13.477 6.78252 10.9635 4.26904 7.86302 4.26904C4.7625 4.26904 2.24902 6.78252 2.24902 9.88304C2.24902 12.9836 4.7625 15.497 7.86302 15.497Z" fill="#2680EB"/>
<path d="M7.86802 8.79402C8.58654 8.79402 9.16902 8.21154 9.16902 7.49302C9.16902 6.77449 8.58654 6.19202 7.86802 6.19202C7.14949 6.19202 6.56702 6.77449 6.56702 7.49302C6.56702 8.21154 7.14949 8.79402 7.86802 8.79402Z" fill="white"/>
<path d="M5.41294 13.265C5.25215 13.2246 5.11173 13.1267 5.01815 12.9898C4.92457 12.8529 4.8843 12.6865 4.90494 12.522L5.13894 10.655C5.15109 10.4876 5.20365 10.3256 5.29213 10.183C5.38061 10.0403 5.50236 9.92129 5.64694 9.83603C5.90214 9.67804 6.20052 9.60423 6.49994 9.62502H9.24994C9.49513 9.61931 9.7371 9.68172 9.94895 9.80529C10.1608 9.92887 10.3342 10.1088 10.4499 10.325C10.4825 10.4261 10.5092 10.5289 10.5299 10.633L10.8209 12.51C10.8465 12.6773 10.8088 12.8482 10.7153 12.9892C10.6217 13.1303 10.479 13.2315 10.3149 13.273C8.71268 13.677 7.0352 13.677 5.43294 13.273L5.41294 13.265Z" fill="white"/>
<path d="M12.659 19.731H3.06598C2.80076 19.731 2.54641 19.6256 2.35887 19.4381C2.17134 19.2505 2.06598 18.9962 2.06598 18.731C2.06598 18.4657 2.17134 18.2114 2.35887 18.0238C2.54641 17.8363 2.80076 17.731 3.06598 17.731H12.659C12.9242 17.731 13.1785 17.8363 13.3661 18.0238C13.5536 18.2114 13.659 18.4657 13.659 18.731C13.659 18.9962 13.5536 19.2505 13.3661 19.4381C13.1785 19.6256 12.9242 19.731 12.659 19.731Z" fill="#BEC3CE"/>
<path d="M19.8087 5.81597L21.6021 7.00726C21.7664 7.11644 21.8807 7.28645 21.9197 7.47987C21.9587 7.6733 21.9193 7.8743 21.8101 8.03866L21.1118 9.08987C21.0844 9.13118 21.0417 9.1599 20.9931 9.1697C20.9444 9.17951 20.8939 9.1696 20.8526 9.14216L18.1313 7.33447C18.09 7.30703 18.0613 7.2643 18.0515 7.21568C18.0417 7.16707 18.0516 7.11655 18.079 7.07523L18.7773 6.02403C18.8865 5.85966 19.0565 5.74541 19.2499 5.70639C19.4433 5.66737 19.6443 5.70678 19.8087 5.81597Z" fill="#484E61"/>
<path d="M16.3889 16.125L13.7939 17.03C13.7505 17.0345 13.7068 17.0238 13.6703 16.9997C13.6339 16.9756 13.6069 16.9397 13.5939 16.898L13.4229 14.156C13.4176 14.1394 13.416 14.1218 13.4182 14.1045C13.4205 14.0872 13.4265 14.0706 13.4359 14.056L17.2799 8.27695C17.3046 8.249 17.3391 8.23148 17.3762 8.22795C17.4133 8.22443 17.4504 8.23515 17.4799 8.25795L20.2509 10.1C20.2682 10.1089 20.2836 10.1212 20.2961 10.1362C20.3086 10.1511 20.318 10.1684 20.3238 10.187C20.3296 10.2056 20.3316 10.2252 20.3297 10.2446C20.3278 10.2639 20.3221 10.2828 20.3129 10.3L16.4709 16.084C16.4607 16.0959 16.4481 16.1056 16.434 16.1127C16.42 16.1197 16.4046 16.1239 16.3889 16.125Z" fill="#484E61"/>
</svg>

                                <Span> ข้อมูลส่วนตัว </Span>
                            </Bar>
                        </Listmenu>
                    )}
                    {ListMenu.map((item, index) => {
                        return (
                            <Listmenu key={index} className={item.cName}>
                                <Bar to={item.path}>
                                    {item.icon}
                                    <Span>{item.title}</Span>
                                </Bar>
                            </Listmenu>
                        );
                    })}
                    {token && (
                        <ListmenuLogout className="nav-text">
                            <Bar to="#" onClick={logout}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.882 15.662C16.6168 15.662 16.3624 15.7674 16.1749 15.9549C15.9874 16.1424 15.882 16.3968 15.882 16.662V17.98C15.882 18.534 15.547 19.022 15.164 19.022H5.336C4.953 19.022 4.618 18.534 4.618 17.98V5.26401C4.618 4.70801 4.953 4.22101 5.336 4.22101H15.164C15.547 4.22101 15.882 4.70801 15.882 5.26401V6.17401C15.882 6.43922 15.9874 6.69358 16.1749 6.88111C16.3624 7.06865 16.6168 7.17401 16.882 7.17401C17.1472 7.17401 17.4016 7.06865 17.5891 6.88111C17.7766 6.69358 17.882 6.43922 17.882 6.17401V5.26401C17.9211 4.50104 17.6576 3.75345 17.1487 3.18367C16.6397 2.61389 15.9265 2.26795 15.164 2.22101H5.336C4.57348 2.26795 3.86027 2.61389 3.35135 3.18367C2.84242 3.75345 2.57889 4.50104 2.618 5.26401V17.98C2.57916 18.7428 2.84282 19.4901 3.35171 20.0597C3.86061 20.6293 4.57366 20.9751 5.336 21.022H15.164C15.9263 20.9751 16.6394 20.6293 17.1483 20.0597C17.6572 19.4901 17.9208 18.7428 17.882 17.98V16.662C17.882 16.3968 17.7766 16.1424 17.5891 15.9549C17.4016 15.7674 17.1472 15.662 16.882 15.662Z" fill="#BEC3CE"/>
<path d="M21.2 10.712L19.33 8.05502C19.1774 7.83826 18.9448 7.691 18.6836 7.64562C18.4224 7.60024 18.1539 7.66045 17.937 7.81302C17.7213 7.96644 17.5753 8.19912 17.5309 8.46004C17.4864 8.72097 17.5473 8.98887 17.7 9.20502L18.518 10.367H12.9C12.6348 10.367 12.3805 10.4724 12.1929 10.6599C12.0054 10.8474 11.9 11.1018 11.9 11.367C11.9 11.6322 12.0054 11.8866 12.1929 12.0741C12.3805 12.2617 12.6348 12.367 12.9 12.367H18.65L17.935 13.667C17.8721 13.7824 17.8326 13.909 17.8187 14.0396C17.8047 14.1703 17.8167 14.3024 17.8538 14.4284C17.891 14.5544 17.9526 14.6719 18.0352 14.7741C18.1177 14.8763 18.2196 14.9612 18.335 15.024C18.4501 15.0873 18.5766 15.1272 18.7071 15.1416C18.8376 15.156 18.9697 15.1445 19.0958 15.1078C19.2219 15.0711 19.3396 15.01 19.4421 14.9278C19.5445 14.8457 19.6298 14.7441 19.693 14.629L21.266 11.764C21.3541 11.5999 21.3945 11.4145 21.3829 11.2286C21.3712 11.0428 21.3079 10.8638 21.2 10.712Z" fill="#BEC3CE"/>
</svg>
                                <Span> ออกจากระบบ </Span>
                            </Bar>
                        </ListmenuLogout>
                    )}
                </Ul>
            </Navmenu>
        </>
    );
};

export default Burger;
