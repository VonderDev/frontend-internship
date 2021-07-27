import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const token = localStorage.getItem('token');
    const routeComponent = (props: any) => (token ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />);
    return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
