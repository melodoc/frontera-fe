import React from 'react';
import i18next from 'i18next';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { URLs } from './../__data__/urls'

import Login from './auth/login';
import Registration from './auth/registration';
import ResetPassword from './auth/reset-password'
import ChooseLanguage from './init/language';
import ChooseTheme from './init/themes';
import Personalizing from './init/personalizing';
import HomePage from './pages/homepage';
import Suggestions from './pages/suggestions';
import Coursepage from './pages/coursepage';

const Dashboard = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to={URLs.login.url} />
        </Route>
        <Route path={URLs.login.url}>
            <Login />
        </Route>
        <Route path={URLs.registration.url}>
            <Registration />
        </Route>
        <Route path={URLs.resetpassword.url}>
            <ResetPassword />
        </Route>
        <Route path={URLs.lang.url}>
            <ChooseLanguage />
        </Route>
        <Route path={URLs.themes.url}>
            <ChooseTheme />
        </Route>
        <Route path={URLs.personalizing.url}>
            <Personalizing />
        </Route>
        <Route path={URLs.suggestions.url}>
            <Suggestions />
        </Route>
        <Route path={URLs.home.url}>
            <HomePage />
        </Route>
        <Route path={URLs.coursepage.url}>
            <Coursepage />
        </Route>
        <Route path="*">
            <h1>{ i18next.t('js.navigation.notFound') }</h1>
        </Route>
    </Switch>
)

export default Dashboard