import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

    const PrivateRoute = ({component: Component, ...rest}: any) => {
        const { loginUser } = useAuthContext()
        console.log('loginUser:', loginUser)
        const routeComponent = (props: any) => (
            loginUser
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login'}}/>
        );
        return <Route {...rest} render={routeComponent}/>;
    };
export  default  PrivateRoute;