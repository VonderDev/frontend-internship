import { useHistory } from 'react-router-dom';
import { Children, createContext, useCallback, useEffect, useState, useContext, useMemo, memo } from 'react';
import { Row, Col } from 'antd';
import { BackHeader, LeftDiv, RightDiv, RowHeader, TextHeader } from './Header.styled';
import { LeftOutlined, MenuOutlined, DownloadOutlined } from '@ant-design/icons';
import Burger  from '../pages/Burger/Burger';

interface HeaderProps {
    title: string;
    right: string;
    left: string;
}

const Header = memo(({ title, right, left }: HeaderProps) => {
    const history = useHistory();

    const goBack = useCallback(() => {
        history.goBack();
    }, []);

    const leftCon = useMemo(() => {
        if (left === 'back') {
            return (
                <BackHeader key={1} onClick={goBack}>
                    <LeftOutlined style={{ color: '#8a8888' }} />
                </BackHeader>
            );
        } else {
            return left;
        }
    }, [left]);

    const rightCon = useMemo(() => {
        if (right === 'menu') {
            return (
                <>
                    <Burger  />
                </>
            );
        } else if (right === 'save') {
            return (
                <>
                    <DownloadOutlined style={{ color: '#8a8888', fontSize: '24px' }} />
                </>
            );
        } else {
            return right;
        }
    }, [right]);

    return (
        <>
            <RowHeader justify="space-between">
                <Col span={4}>
                    <LeftDiv>{leftCon}</LeftDiv>
                </Col>
                <Col span={16}>
                    <TextHeader>{title}</TextHeader>
                </Col>
                <Col span={4}>
                    <RightDiv>{rightCon}</RightDiv>
                </Col>
            </RowHeader>
        </>
    );
});

export default Header;
