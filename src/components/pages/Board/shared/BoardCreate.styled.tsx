import { Form, Input } from 'antd';
import styled from 'styled-components';

export const InputCreateContent = styled(Input)`
    color: grey;
    font-size: var(--font-18);
    border-radius: 15px;
    width: 80%;
    height: 55px;
    box-shadow: 0px 3px 6px #f1f1f1;
`;

export const BoardForm = styled(Form.Item)`
    padding-top: 3%;
    & .ant-form-item-control {
        text-align: left;
    }
`;

export const ContainerBoardCreate = styled.div`
    padding-left: 5%;
`;
