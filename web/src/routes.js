import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from './pages/Login';
import Viewer from './pages/Viewer';
import NewUser from './pages/NewUser';
import NewClient from './pages/NewClient';

export const history = createBrowserHistory();

export default function Routes() {
    function isAuthenticated() {
        return sessionStorage.getItem('token') !== null;
    }

    function PrivateRoute({ path, component }) {
        if (!isAuthenticated()) {
            component = () => <Redirect to="/login" />;
        }

        return <Route path={path} render={component} />;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />

                <PrivateRoute path="/users/new" component={() => <NewUser />} />
                <PrivateRoute path="/users" component={() => <Viewer content="users" />} />

                <PrivateRoute path="/clients/new" component={() => <NewClient />} />
                <PrivateRoute path="/clients" component={() => <Viewer content="clients" />} />

                <Route path="/" render={() => <Redirect to="/clients" />} />
            </Switch>
        </BrowserRouter>
    );
}
