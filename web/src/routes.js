import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Viewer from './pages/Viewer';
import NewUser from './pages/NewUser';
import NewClient from './pages/NewClient';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />

                <Route path="/users" render={() => <Viewer content="users" />} />
                <Route path="/users/new" component={NewUser} />

                <Route path="/clients" render={() => <Viewer content="clients" />} />
                <Route path="/clients/new" component={NewClient} />
            </Switch>
        </BrowserRouter>
    );
}
