import React from 'react';
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {URLs} from './../__data__/urls'

import Login from './auth/login';
import Registration from './auth/registration';
import ResetPassword from './auth/reset-password'
import HomePage from './homepage';
import ChooseLanguage from './init/language';
import Personalizing from './init/personalizing';
import ChooseTheme from './init/themes';
import Suggestions from './pages/suggestions';
import Coursepage from './pages/coursepage';

const Dashboard = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to={URLs.login.url}/>
        </Route>
        <Route path={URLs.login.url}>
            <Login/>
        </Route>
        <Route path={URLs.lang.url}>
            <ChooseLanguage/>
        </Route>
        <Route path={URLs.suggestions.url}>
            <Suggestions/>
        </Route>
        <Route path={URLs.home.url}>
            <HomePage/>
        </Route>
        <Route path={URLs.registration.url}>
            <Registration/>
        </Route>
        <Route path={URLs.resetpassword.url}>
            <ResetPassword/>
        </Route>
        <Route path="*">
            <h1>Not found</h1>
        </Route>
    </Switch>
)

export default Dashboard