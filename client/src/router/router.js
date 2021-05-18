import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import {UserStore} from '../business/UserStore';
import App from '../components/App/App';
import Contact from '../components/Contact/Contact';
import ListProfil from '../components/ListProfil/ListProfil';
import Profil from '../components/Profil/Profil';
import PrivateRoute from './PrivateRoute';
import NavBar from '../components/NavBar/NavBar'

const USER_STORE = new UserStore();

const logout = () => {
    sessionStorage.removeItem('jwtToken');
    window.location.href = "/"
};

const Router = () => {
    return(
        <BrowserRouter>
            <Provider userstore={USER_STORE}>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route path="/logout">
                        {
                            logout
                        }
                    </Route>
                    <PrivateRoute exact path="/list-profil" component={ListProfil} />
                    <PrivateRoute exact path="/profil" component={Profil} />
                </Switch>
            </Provider>
        </BrowserRouter>
    )
}

export default Router
