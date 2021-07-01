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
    const AuthContext = createContext<any>(null);
    const data = JSON.stringify(authMock)

    const AuthProvider =  (({children}: IAuthProps) => {
    const [user ,setUser] = useState<any | null >() ;
    const [token ,setToken] = useState<any | null >() ;

    const getUser = async() =>{
      const token = localStorage.getItem('token');
      return await axios
          .get('http://localhost:5000/user/find',
          { headers :{
          Authorization : `Bearer ${token}`
          }})
          .then((response) => {
              setUser(response.data.resuit)
              console.log(' USER_DATA :', user);
              return response.data;
          })
          .catch((err) => {
              console.error(err);
          });
  }

    const login = ({email, password}: authData) => 
    {
      console.log('props: ',{email, password});
      return axios.post('http://localhost:5000/login', {email ,password }
      ).then((response)=>{
        if (response.data.token)
        localStorage.setItem('token', response.data.token);
        setToken(localStorage.getItem('token'))
        setUser(response.data.resuit)
        return user
      }).catch(err => {
        console.error(err)
        alert('ไม่ผู้ใช้นี้ อีเมลหรือรหัสผ่านไม่ถูกต้อง')
        console.log('Failed login');
      });
        };

    const gotoLogin = () =>{
      return  <Redirect to='/login'/>
    }
    const logout = () => {
        localStorage.removeItem('token')
        setUser(undefined)
    }
  
    
    useEffect(() => {
      const tokenkey = localStorage.getItem('token');
      if (tokenkey ) {
        console.log('token' , tokenkey)
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
        token,
        getUser
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
