import { createContext, useEffect, useState, useContext, useCallback } from "react";
import { Redirect, Router, useHistory } from "react-router-dom";
import authMock from './Authmock.json'
import { authData } from "./User.type";
import axios from 'axios'

const data = JSON.stringify(authMock)

  interface IAuthProps {
    children: any 
    }
  
    const AuthContext = createContext<any>(null);
  
    const AuthProvider =  (({children}: IAuthProps) => {
    const history = useHistory();
    const [loginUser, setLoginUser] = useState<boolean>(false)
    const [user ,setUser] = useState<boolean>(false)
    
    const login =  useCallback( ({email, password}: authData) => 
    {
    
      email && password ? setUser(true) : setUser(false) ;
    //     try {
    //         await axios.get('./Authmock.json')
    //         .then(respons=>{
    //             console.log(respons.data)
    //             return respons.data
    //         })

    // }catch (err) {
    //     return console.log('Error connecting...')
    // }
      const accessLogin = password === authMock.password && email === authMock.email

        if (user) {
          if(accessLogin){
            localStorage.setItem('accesstoken', data);
            const tokenKey = localStorage.getItem('accesstoken') || '';
            tokenKey ? 
            setLoginUser(true)
            : setLoginUser(false);
          }else {
            alert('ไม่ผู้ใช้นี้ อีเมลหรือรหัสผ่านไม่ถูกต้อง')
            console.log('Failed login');
          } 
        } else {
          return user;
        }
        console.log('props: ',{email, password});
        console.log('access:' , accessLogin ,'user?:',user)
        return user;
        },[loginUser , user],)

    const logout = () => {
        setLoginUser(false)
        setUser(false)
        localStorage.removeItem('accesstoken')
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
