import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import {UserStore} from '../business/UserStore';
import App from '../components/App/App';
import Contact from '../components/Contact/Contact';
import ListProfil from '../components/ListProfil/ListProfil';
import Profil from '../components/Profil/Profil';
const USER_STORE = new UserStore();

const Router = () => {
    return(
        <BrowserRouter>
            <Provider userstore={USER_STORE}>
                <Switch>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route exact path="/list-profil">
                        <ListProfil/>
                    </Route>
                    <Route exact path="/profil">
                        <Profil/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </Provider>
        </BrowserRouter>
    )
}

export default Router
