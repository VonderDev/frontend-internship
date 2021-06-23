import { createContext, useEffect, useState } from "react";
import { Router } from "react-router-dom";
import authMock from './Authmock.json'
import { authData } from './User.type'

    async function userAPI() {
        console.log("userInfo :",authMock)
       return authMock as Array<authData> | [];
    }

  interface IAuthContext {
    loggedInUser: authData | null,
    setAuthUser: (user: authData | null) => void
    }

  const AuthContext = createContext<IAuthContext>( {
    loggedInUser: null,
    setAuthUser: () => {},
  })
  
  interface IAuthProps {
    children: any 
    }
  
  const { Provider } = AuthContext
  
  
  const AuthProvider =  (({children}: IAuthProps) => {
    const [authState, setAuthState] = useState<authData>()
   
    const [loggedInUser, setLoggedInUser] = useState<authData | null>(null)

    async function getUser() {
        const response = await userAPI();
        if (response) {

        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    const setAuthUser = (user: authData | null) => setLoggedInUser(user)
    return (
      <Provider value= {{
        loggedInUser,
        setAuthUser,
      }}>
           {children}
        </Provider>
    );
  })
  
export { AuthContext, AuthProvider }
