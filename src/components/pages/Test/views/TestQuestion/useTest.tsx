import { useState } from 'react';
interface IState {
    value?: number;
    currentIndex?: number;
}

const useTest = () => {
    const [value, setValue] = useState<IState>({ value: 0 });
    const [currentIndex, setCurrentIndex] = useState<IState>({ currentIndex: 0 });

    function setValueTest(value: number) {
        console.log('[Debug]: set value == ' + value);
    }

    const action = { setValueTest };
    return action;
};

export default useTest;
