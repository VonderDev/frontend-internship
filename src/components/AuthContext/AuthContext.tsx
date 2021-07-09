import { createContext, useEffect, useState, useContext, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { authData } from './User.type';
import axios from 'axios';

interface IAuthProps {
    children: any;
}

const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: IAuthProps) => {
    const [user, setUser] = useState<any | null>();
    const [token, setToken] = useState<any | null>();

    const getUser = async () => {
        const token = localStorage.getItem('token');
        try {
            const { data } = await axios.get('/user/find', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return data;
        } catch (err) {
            console.error(err);
        }
    };

    const login = ({ email, password }: authData) => {
        console.log('props: ', { email, password });
        return axios
            .post('/login', { email, password })
            .then((response) => {
                if (response.data.token) localStorage.setItem('token', response.data.token);
                setToken(localStorage.getItem('token'));
                setUser(response.data.resuit);
                return user;
            })
            .catch((err) => {
                console.error(err);
                alert('อีเมลและรหัสผ่านที่คุณกรอกไม่ตรงกับข้อมูลในระบบ \nโปรดตรวจสอบและลองอีกครั้ง');
                console.log('Failed login');
            });
    };

    const gotoLogin = () => {
        return <Redirect to="/login" />;
    };
    const logout = () => {

        localStorage.removeItem('token')
        setToken(localStorage.getItem('token'))
        setUser(undefined)
    }
    useEffect(() => {
        const tokenkey = localStorage.getItem('token');
        if (tokenkey) {
            console.log('token', tokenkey);
        } else {
            gotoLogin;
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                user,
                token,
                getUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(' error AuthContext');
    }
    return context;
};

export { AuthContext, AuthProvider, useAuthContext };
