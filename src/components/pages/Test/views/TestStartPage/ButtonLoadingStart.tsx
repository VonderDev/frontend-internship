import { Spin } from 'antd';
import { useState } from 'react';
import { ButtonLoading, IsLoadingSpinner, TextIsLoading } from '../../shared/styles/TestPage.styled';
import { useHistory } from 'react-router-dom';

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
            history.push('/teststory');
        }, 1500);
    };

    return (
        <div>
            {isLoading ? (
                <IsLoadingSpinner>
                    {/* <TextIsLoading>Fetching Data</TextIsLoading> */}
                    <Spin size="large" />
                </IsLoadingSpinner>
            ) : (
                <ButtonLoading onClick={fetchData}>เริ่มเกม</ButtonLoading>
            )}
        </div>
    );
}

export default ButtonLoadingStart;
