import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

const PrivateRoute = ({component: Component, ...rest}: any) => {
        const token = localStorage.getItem('token');
        const routeComponent = (props: any) => (
            token
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login'}}/>
        );
        return <Route {...rest} render={routeComponent}/>;
    };

export  default  PrivateRoute;