import { createContext, useState, useCallback, useEffect } from 'react';
interface IcontextProps {
    children: any;
}
type Result = {
    categoryID: string;
    score: string;
};
type StudentList = Array<Result> | [];

const TestContext = createContext<any>(null);

const TestProvider = ({ children }: IcontextProps) => {
    const [scoreList, setScoreList] = useState<StudentList>([]);

    const addScoreList = useCallback(
        ({ categoryID, score }: Result) => {
            console.log(scoreList);
            setScoreList((prev) => {
                const newData = [...prev];
                newData.push({ categoryID, score });
                return newData;
            });
        },
        [scoreList],
    );

    useEffect(() => {}, [scoreList]);

    const value = {
        scoreList,
        setScoreList,
        addScoreList,
    };
    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export { TestContext, TestProvider };
