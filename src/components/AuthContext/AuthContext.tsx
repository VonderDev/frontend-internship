import { createContext, useEffect, useState, useContext, useCallback } from "react";
import { Redirect } from "react-router-dom";
import authMock from './Authmock.json'
import { authData } from "./User.type";
import axios from 'axios'

  interface IAuthProps {
    children: any 
    }
interface datauser {
      name: string | null
  }

      // const getToken = async () => {
      //   return await axios.post('', {
      //     method: 'post',
      //     url: 'http://localhost:5000/login',
      //     headers: { },
      //     data : JSON.stringify({ email , password })
      //   }).then((response)=>{
      //     return response.data
      //   }).catch(err => {
      //     console.error(err)
      //   })
      // }
      // const response = getToken();
  
    const AuthContext = createContext<any>(null);
    const data = JSON.stringify(authMock)

    const AuthProvider =  (({children}: IAuthProps) => {
    const [user ,setUser] = useState<datauser | null >() ;
    const [token ,setToken] = useState<any | null >() ;

    const login =  async ({email, password}: authData) => 
    {

    if (email &&  password){

      const accessLogin = password === authMock.password && email === authMock.email
      console.log('props: ',{email, password});
        
          if(accessLogin){
            setUser(JSON.parse(data))
            localStorage.setItem('token', "00215484");
            setToken(localStorage.getItem('token'));

          }else {
            alert('ไม่ผู้ใช้นี้ อีเมลหรือรหัสผ่านไม่ถูกต้อง')
            console.log('Failed login');
          }
    }else{
      return [user,token];
    }
        };

    const gotoLogin = () =>{
      return  <Redirect to='/login'/>
    }
    const logout = () => {
        localStorage.removeItem('token')
        setUser(undefined)
    }
    // const data = JSON.stringify(authMock)
    // setUser(JSON.parse(data))
    console.log('Data' ,user)
    
    useEffect(() => {
      const tokenKey = localStorage.getItem('token');
      if (tokenKey ) {
        // setUser(JSON.parse(data))
        console.log('token' ,tokenKey)
        console.log('Data2' ,user)
        window.location.reload;
      }else{
        gotoLogin
      }
       }, []);

    return (
      <AuthContext.Provider value= {{
        login,
        logout,
        user,
        token
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
