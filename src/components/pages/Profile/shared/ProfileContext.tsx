import { createContext, useCallback, useEffect, useState, useContext } from 'react';
interface IContextProps {
    children: any;
}
type User = {
    userName: string;
    name: string;
    surname: string;
    email: string;
};
type UserList = Array<User> | [];

const ProfileContext = createContext<any>(null);

const ProfileProvider = ({ children }: IContextProps) => {
    const [userList, setUserList] = useState<UserList>([]);

    const addUser = useCallback(({ userName, name, surname, email }: User) => {
        setUserList((prev) => {
            const newData = [...prev];
            newData.push({ userName, name, surname, email });
            return newData;
        });
    }, []);

    useEffect(() => {
        console.log('studentList', userList);
    }, [userList]);

    const value = {
        userList,
        setUserList,
        addUser,
    };

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

const useProfileContext = () => {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error('Error context undefined');
    }
    return context;
};

export { ProfileContext, ProfileProvider, useProfileContext };
