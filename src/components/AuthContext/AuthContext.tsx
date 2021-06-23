import { createContext, useEffect, useState, useContext, useCallback } from "react";
import { Router } from "react-router-dom";
import authMock from './Authmock.json'

const data = JSON.stringify(authMock)

  interface IAuthProps {
    children: any 
    }
  
    const AuthContext = createContext<any>(null);
  
  const AuthProvider =  (({children}: IAuthProps) => {
   
    const [loginUser, setLoginUser] = useState<boolean>(false)
 
    const login = useCallback(() => {
            localStorage.setItem('token', data);
            const tokenKey = localStorage.getItem('token') || '';
            tokenKey ? 
            setLoginUser(true) 
            : setLoginUser(false)
            return ;
        },[loginUser],)

    const logout = () => {
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
