import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';
import Clients from './pages/Clients';
import NewUser from './pages/NewUser';
import NewClient from './pages/NewClient';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />

                <Route path="/users" component={Users} />
                <Route path="/users/new" component={NewUser} />

                <Route path="/clients" component={Clients} />
                <Route path="/clients/new" component={NewClient} />
            </Switch>
        </BrowserRouter>
    );
}
