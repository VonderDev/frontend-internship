import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListMenu } from './ListMenu';
import styled, { css } from 'styled-components';
import { MenuOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Button, Spin } from 'antd';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import LoadingPage from 'components/AuthContext/LoadingPage';
import axios from 'axios';

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
                position: absolute;
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
        color: var(--Black);
        font-size: 18px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 60px;
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
    box-shadow: 0 3px 6px #e0e0e0 ;
`;
const ListmenuLogout = styled(Listmenu)`
    bottom: 0;
    display: flex;
`;
 {/* <Overlay active={sidebar ? 'active' : ''} onClick={showSidebar} /> */}

const Burger = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [username, setUsername] = useState('');
    const token = localStorage.getItem('token');
    const { logout ,getUser } = useAuthContext();
    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    const getUserInfo = async() =>{
        const token = localStorage.getItem('token');
        const response = await getUser();
        if(token){
            if (response) {
                setUsername(response.username)
                console.log(response);
            } else {
                console.log('error');
            }
        } else {
            console.log('none');
        }

      }
  
    useEffect(() => {
        if(token){
        getUserInfo()
    }else{
        window.location.reload;
    };
    }, []);

    return (
            <>
            <MenuOutlined  style={{ color: '#8a8888' ,fontSize: '24px'}} onClick={showSidebar} />
            <Navmenu active={sidebar ? 'active' : ''}>
                <Ul onClick={showSidebar}>
                    <Avataruser>
                        <Avatar size={75} icon={<UserOutlined />} />
                        { token ? (<AvatarName>{username}</AvatarName>)
                        : (<AvatarName> Guest #000  </AvatarName> )}
                        
                        {token ? null : (
                            <BarBtn to="/login">
                            <LoginBtn type="primary">
                                Login
                            </LoginBtn>
                            </BarBtn>

                        )}
                    </Avataruser>
                    {token && (
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
                    {token && (
                        <ListmenuLogout className="nav-text">
                            <Bar to="#" onClick={ logout }>
                                <LoginOutlined />
                                <Span> Logout</Span>
                            </Bar>
                        </ListmenuLogout>
                    )}
                </Ul>
            </Navmenu>
             </>
        
    );
};

export default Burger;
