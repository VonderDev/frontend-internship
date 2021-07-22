import { Spin } from 'antd';
import { useState ,useEffect } from 'react';
import { ButtonLoading, ContainerButtonLoading, IsLoadingSpinner } from '../../shared/styles/Test/TestPage.styled';
import { useHistory } from 'react-router-dom';
import { ApiGetTestData } from '../../apis/test.api';
import { IQuestion } from '../../shared/interface/Test.interfaces';
import { useAuthContext } from 'components/AuthContext/AuthContext';
import { cleanup } from '@testing-library/react';
import { ApiPostTestResult } from '../../apis/test.api';
import { ApiPostCreateGuestToken } from '../../apis/GuestTest.api';

function ButtonLoadingStart() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
 
    const fetchData = () => {
        console.log(isLoading);
        setLoading(true);
        setTimeout(() => {
            console.log('set Loading:', isLoading);
            setLoading(false);
            ApiPostCreateGuestToken();
            history.push('/testquestion');
        }, 1500);
    };

    //------------------- GET USERNAME FOR CHECK LIKE -------------------//
    const { getUser } = useAuthContext();
    const [userId, setUserId] = useState('');

    const getUserId = async () => {
        const token = localStorage.getItem('token');
        const response = await getUser();
        if (token) {
            if (response) {
                setUserId(response._id);
                console.log(userId);
            } else {
                console.log('error');
            }
        } else {
            console.log('No token');
        }
    };

    function postGenTokenForGuest() {
        ApiPostTestResult;
    }

    return (
        <ContainerButtonLoading>
            {isLoading ? (
                <IsLoadingSpinner>
                    <Spin size="large" />
                </IsLoadingSpinner>
            ) : (
                <ButtonLoading onClick={fetchData}>เริ่มเกม</ButtonLoading>
            )}
        </ContainerButtonLoading>
    );
}

export default ButtonLoadingStart;
