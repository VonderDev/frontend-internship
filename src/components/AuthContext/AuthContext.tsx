import { createContext, useEffect, useState, useContext, useCallback } from "react";
import { Router } from "react-router-dom";
import authMock from './Authmock.json'
import { authData } from "./User.type";
import axios from 'axios'

const data = JSON.stringify(authMock)

  interface IAuthProps {
    children: any 
    }
  
    const AuthContext = createContext<any>(null);
  
  const AuthProvider =  (({children}: IAuthProps) => {
   
    const [loginUser, setLoginUser] = useState<boolean>(false)
 
    const login =  useCallback( () => 
    {
    //     try {
    //         await axios.get('./Authmock.json')
    //         .then(respons=>{
    //             console.log(respons.data)
    //             return respons.data
    //         })

    // }catch (err) {
    //     return console.log('Error connecting...')
    // }
        // const currentUser = authMock.find((user: authData) => user.email === values.email) || '';

        // if (values.password === currentUser?.password) {
        //     history.push('/home');
        // } else {
        //     alert('ไม่ผู้ใช้นี้ อีเมลหรือรหัสผ่านไม่ถูกต้อง')
        //     console.log('Failed login');
        // }
            localStorage.setItem('token', data);
            const tokenKey = localStorage.getItem('token') || '';
            tokenKey ? 
            setLoginUser(true) 
            : setLoginUser(false)
            return ;
        },[loginUser],)

    const logout = () => {
        setLoginUser(false)
        localStorage.removeItem('token')
    }

    useEffect(() => {
       console.log('Data' ,data)
       }, []);

    return (
      <AuthContext.Provider value= {{
        loginUser,
        login,
        logout
      }}>
           {children}
        </AuthContext.Provider>
    );

    
  })

  const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(" error AuthContext")
    }
    return context
}
  
export { AuthContext, AuthProvider ,useAuthContext  }
