import { useHistory } from "react-router-dom";
import { Children, createContext, useCallback, useEffect, useState, useContext, useMemo } from "react"
import { Row, Col } from 'antd';
import { BackHeader, LeftDiv,  RightDiv, RowHeader, TextHeader } from './Header.styled';
import { LeftOutlined,MenuOutlined ,DownloadOutlined } from '@ant-design/icons';
import Hamburger from "../pages/Burger/Burger";

interface HeaderProps {
    children: any 
    right: string
    left: string
}

const Header = ({children, right, left}: HeaderProps) => {
    const history = useHistory();

    const goBack = useCallback(() =>{
        history.goBack();
    },[])

    const leftCon = useMemo(() => {
        if (left === 'back') {
            return <BackHeader onClick={goBack}>
                <LeftOutlined style={{ color: '#8a8888' }}/>
            </BackHeader>
        } else{
            return left
        }
    },[])

    const rightCon = useMemo(() => {
        if (right === 'menu') {
            return<>
            <Hamburger />
            </>
        }else if (right === 'save'){
            return<>
            <DownloadOutlined style={{ color: '#8a8888' ,fontSize: '24px'}}/>
            </>
        }
        else{
            return right
        }
    },[])

    return (
        <>
        <RowHeader justify="space-between">
            <Col span={4}>
                <LeftDiv>
                {leftCon}
                </LeftDiv>
            </Col>
            <Col span={16}>
                <TextHeader>
                    {children}
                </TextHeader>
            </Col>
            <Col span={4}>
                <RightDiv >
                {rightCon}
                </RightDiv >
            </Col>
        </RowHeader>
        </>

    );
};

export default Header ;
