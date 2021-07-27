import { Button } from 'antd';
import { ButtonStyle } from 'shared/style/theme/component';
import styled from 'styled-components';
import ErrorPageImage from '../image/errorPage.png';

export const ContainerOfErrorPage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;
export const ErrorPageImg = styled.div`
    background-image: url(${ErrorPageImage});
    width: 213px;
    height: 181px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextErrorTopic = styled.div`
    font-size: 24px;
    font-weight: 700;
    padding-top: 20px;
`;

export const TextDescriptionError = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #6e7282;
`;

export const ButtonRefreshPage = styled(Button)`
    width: 343px;
    height: 51px;
    font-size: 16px;
    font-weight: bolder;
    background-color: #287fde;
    border-radius: 12px;
    color: white;
    margin-top: 50px;
`;

export const ButtonBackToHomePage = styled.div`
    font-size: 16px;
    font-weight: bolder;
    color: var(--Blue-500);
    margin-top: 30px;
    :hover {
        cursor: pointer;
    }
`;
