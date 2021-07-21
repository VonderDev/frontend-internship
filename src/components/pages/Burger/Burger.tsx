import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListMenu } from './ListMenu';
import styled, { css } from 'styled-components';
import { MenuOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Button } from 'antd';

const { Header, Sider } = Layout;

const Navbar = styled(Header)`
    background-color: #9696f1;
    height: 80px;
    display: flex;
    justify-content: start;
    z-index: 1;
    width: 100%;
    max-width: 600px;
    top: 0;
`;
const Bar = styled(Link)`
    margin-top: 10px;
    font-size: 2rem;
    background: none;
`;

const Navmenu = styled(Menu)<{ active: 'active' | '' }>`
    background-color: #9696f1;
    width: 250px;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    position: fixed;
    top: 0;
    left: -100vh;
    box-shadow: 5px 5px 5px #8080d4 !important;
    transition: 850ms;
    z-index: 100;
    ${({ active }) => {
        if (active === 'active') {
            return css`
                left: 0%;
                transition: 350ms;
                border-top-right-radius: 30px;
            `;
        }
    }}
`;

const Ul = styled.ul`
    width: 100%;
`;
const Listmenu = styled.li`
    &.nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 0px;
        list-style: none;
        height: 60px;
    }
    &.nav-text a {
        text-decoration: none;
        color: #ffffff;
        font-size: 18px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 60px;
        border-radius: 4px;
    }
    &.nav-text a:hover {
        background-color: #ffffff;
        color: black;
    }
`;

const Span = styled.span`
    margin-left: 16px;
`;
const Avataruser = styled.div`
    margin: 30px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const AvatarName = styled.span`
    margin: 20px 0 20px 0;
    font-size: 22px;
    font-weight: 300;
`;

const LoginBtn = styled(Button)`
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    margin: 10px 0 0 0;
`;

const Overlay = styled.div<{ active: 'active' | '' }>`
    ${({ active }) => {
        if (active === 'active') {
            return css`
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100%;
                background-color: #0c1066;
                opacity: 0.3;
                z-index: 2;
            `;
        }
    }}
`;

const Burger = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [visible, setVisble] = useState(false);
    const loginAccess = () => setVisble(true);
    const notAccess = () => setVisble(false);

    return (
        <>
            <Navbar>
                <Bar to="#">
                    <MenuOutlined style={{ color: '#ffffff' }} onClick={showSidebar} />
                </Bar>
            </Navbar>

            <Overlay active={sidebar ? 'active' : ''} onClick={showSidebar} />

            <Navmenu active={sidebar ? 'active' : ''}>
                <Ul onClick={showSidebar}>
                    <Avataruser>
                        <Avatar size={75} icon={<UserOutlined />} />
                        <AvatarName> Guest #000</AvatarName>
                        {visible ? null : (
                            <LoginBtn type="primary" onClick={loginAccess}>
                                Login
                            </LoginBtn>
                        )}
                    </Avataruser>
                    {visible && (
                        <Listmenu className="nav-text">
                            <Bar to="/profile">
                                <UserOutlined />
                                <Span> Profile </Span>
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
                    {visible && (
                        <Listmenu className="nav-text">
                            <Bar to="#" onClick={notAccess}>
                                <LoginOutlined />
                                <Span> Logout</Span>
                            </Bar>
                        </Listmenu>
                    )}
                </Ul>
            </Navmenu>
        </>
    );
};

export default Burger;
