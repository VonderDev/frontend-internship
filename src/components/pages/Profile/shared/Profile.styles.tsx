import { Button , Input , Card , Image , List , Modal , Row} from 'antd';
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';

export const AlignRight = styled.div`
    float: right;
`;

export const AlignLeft = styled.div`
    float: left;
`;

export const ContainerProfile = styled.div`
    padding: 0px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ButtonSubmit = styled(Button)`
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    color: var(--Blue-400);
    border-color: var(--Blue-400);
    width: 100%;
    height: 51px;
    margin-top: 15px;
    margin-bottom: 0px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;

export const ButtonSave = styled(Button)`
    font-weight: bolder;
    font-size: 16px;
    position: absolute;
    float: left;
    top: 0;
    background-color: transparent;
    border: none;
    padding: 0px;
    color: var(--Blue-400);
    width: 65px;
    height: 19px;
    z-index: 999;
    transform: translateX(48vh) translateY(2.5vh);
`;

export const ButtonLeaveModal = styled(Button)`
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    color: white;
    border-color: var(--Red-300);
    background-color: var(--Red-300);
    width: 295px;
    height: 51px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;
export const ButtonCancleModal = styled(Button)`
    font-weight: bolder;
    font-size: 16px;
    background-color: transparent;
    border: none;
    padding: 0px;
    color: var(--Blue-400);
    width: 65px;
    height: 19px;
    margin-top: 15px;
    transform: translateY(0%);
`;

export const FormInput = styled(Input)`
    font-size: 16px;
    border-radius: 10px;
    background-color: white;
    width: 343px;
    height: 51px;
    box-shadow: 0px 1px 6px #c7c7c7;
`;

export const TextTopicEditProfile = styled.div`
    width: 343px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--Gray-400);
`;

export const TextTopic2 = styled.div`
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding-top: 15px;
    text-align: left;
    font-weight: bolder;
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 0px;
`;

export const TextUserInfo1 = styled.div`
    text-align: left;
    font-weight: bolder;
    font-size: 16px;
    margin-top: 10px;
`;
export const TextUserInfo2 = styled.div`
    text-align: right;
    float: right;
    font-weight: normal;
    font-size: 16px;
    margin-top: 10px;
`;

export const TextUsername = styled.div`
    font-weight: bolder;
    font-size: 22px;
    margin-top: 10px;
    padding-bottom: 0px;
`;
export const TextHeadModal = styled.div`
    font-weight: bolder;
    font-size: 24px;
`;
export const TextBodyModal = styled.div`
font-weight: normal;
font-size: 16px;
`;

export const CardText = styled.div`
    font-weight: bolder;
    font-size: 16px;
    transform: translateY(67%) translateX(12%);
`;
export const HistoryText = styled.div`
    font-size: 14px;
    font-weight: bolder;
    transform: translateY(-100%) translateX(0%);
`;

export const UserImage = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 90px;
`;

export const ResultImage = styled.img`
    width: 111px;
    height: 112px;
    border-radius: 90px;
    transform: translateY(4%);
`;

export const HistoryImage = styled.img`
    width: 88px;
    height: 88px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateY(-1%);
`;

export const IconArrow = styled(RightOutlined)`
    color: #3a8ce4;
    transform: translateY(350%);
`;

export const LinkMoreResult = styled.div`
    width: 100%;
    padding-top: 15px;
    margin-top: 15px;
    text-align: right;
    font-size: 16px;
    color: var(--Blue-300);
`;

export const ResultCard = styled(Card)`
    box-shadow: 0px 3px 6px #c7c7c7;
    margin-top: 0px;
    height: 130px;
    width: 100%;
    border-radius: 10px;
    & .ant-card-body {
        padding: 5px;
    }
`;

export const BoardCard = styled(Card)`
    margin-bottom: 10px;
    height: 88px;
    width: 100%;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 10px;
    & .ant-card-body {
        padding: 0px;
    }
`;

export const ResultCardHistory = styled(Card)`
    box-shadow: 0px 3px 6px #c7c7c7;
    margin-top: 10px;
    height: 130px;
    width: 343px;
    border-radius: 10px;
    & .ant-card-body {
        padding: 5px;
    }
`;

export const ListProfile = styled(List)`
    font-weight: bolder;
    width: 100%;
`;

export const RowStyled = styled(Row)`
    width: 100%;
`;

export const ProfileListItem = styled(List.Item)`
    margin-bottom: 10px;
    height: 88px;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 10px;
    & .ant-list-item-meta-title {
        font-size: 14px;
        font-weight: bolder;
        transform: translateY(-20%) translateX(-12%);
        width: 250px;
        text-overflow: ellipsis;
        /* เพิ่ม ... จุดจุดจุดท้ายสุด */
        overflow: hidden;
        white-space: nowrap;
    }
    & .ant-list-item-meta-description {
        font-size: 12px;
        transform: translateY(-100%) translateX(-12%);
        width: 250px;
    }
    & .ant-list-item-action {
        transform: translateY(-300%) translateX(25%);
    }
    & li {
        font-size: 12px;
    }
    & .ant-list-item-action > li {
        padding: 0 12px;
    }
`;
export const ConfirmModal = styled(Modal)`
        display: flex;
        justify-content: center;
    & .ant-modal-content {
        width: 343px;
        height: 249px;
        border-radius: 15px;
    }
    & .ant-modal-header {
        height: 89px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    }
    & .ant-modal-body {
        height: 30px;
        display: flex;
        align-items: center; 
        text-align: center;
        justify-content: center;
    }
    & .ant-modal-footer {
        height: 130px;
        align-items: center; 
        text-align: center;
        justify-content: center;
    }
`;
