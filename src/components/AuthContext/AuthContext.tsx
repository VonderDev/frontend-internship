import { createContext, useEffect, useState, useContext, useCallback } from "react";
import { Redirect, Router, useHistory } from "react-router-dom";
import authMock from './Authmock.json'
import { authData } from "./User.type";
import axios from 'axios'

  interface IAuthProps {
    children: any 
    }
interface datauser {
      name: string | null
  }
  
    const AuthContext = createContext<any>(null);


    const AuthProvider =  (({children}: IAuthProps) => {
    const [loginUser, setLoginUser] = useState<boolean>(false)
    const [user ,setUser] = useState<datauser>({name: ''}) ;
    const history = useHistory();
    
    const login =  useCallback( ({email, password}: authData) => 
    {
    if (email &&  password){

      const accessLogin = password === authMock.password && email === authMock.email
      console.log('props: ',{email, password});
        
          if(accessLogin){
            const data = JSON.stringify(authMock)
            setUser(JSON.parse(data))
            localStorage.setItem('accesstoken', "00215484");
            const tokenKey = localStorage.getItem('accesstoken') || '';
            tokenKey ? setLoginUser(true) : setLoginUser(false);
            
          }else {
            alert('ไม่ผู้ใช้นี้ อีเมลหรือรหัสผ่านไม่ถูกต้อง')
            console.log('Failed login');
          }
    }else{
      return false;
    }
        },[loginUser , user],)

    const gotoLogin = () =>{
      return  <Redirect to='/login'/>
    }

    const logout = () => {
        setLoginUser(false)
        setUser({name: ''})
        localStorage.removeItem('accesstoken')
    }
    // const data = JSON.stringify(authMock)
    // setUser(JSON.parse(data))

    useEffect(() => {
      const tokenKey = localStorage.getItem('accesstoken');
      if (!tokenKey) {
        gotoLogin
      }
      console.log('Data' ,user)
       }, [ user,loginUser]);

    return (
      <AuthContext.Provider value= {{
        loginUser,
        login,
        logout,
        user
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
