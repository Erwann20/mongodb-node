import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { observer, inject } from 'mobx-react';

const PrivateRouteContainer = ({ userstore, component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem('jwtToken');
        if (token) {
            const tokenExpiration = jwt_decode(token).exp;
            const dateNow = new Date();

            if (tokenExpiration < dateNow.getTime() / 1000) {
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [isAuthenticated]);

    if (isAuthenticated === null) {
        return <></>;
    }

    return (

        <Route
                {...rest}
                render={(props) => (!isAuthenticated ? (
                        <Redirect exact to="/" />
                ) : (
                                            <Component {...props} />
                                    ))}
        />
    );
};

const PrivateRoute = inject('userstore')(observer(PrivateRouteContainer));

export default PrivateRoute;
