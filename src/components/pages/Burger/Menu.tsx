import React from 'react';
import { HomeOutlined, FormOutlined, UserOutlined 
,LoginOutlined, MessageOutlined ,UserAddOutlined }  from '@ant-design/icons';

export const Menu = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Test',
    path: '/test',
    icon: <FormOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Board',
    path: '/board',
    icon: <MessageOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <UserOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <LoginOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <UserAddOutlined />,
    cName: 'nav-text'
  }
];