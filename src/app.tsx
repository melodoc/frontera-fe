import React from 'react';

import Login from './containers/auth/login';
import Registration from './containers/auth/registration';
import ResetPassword from './containers/auth/reset-password';
import Restore from './containers/auth/restore';
import HomePage from './containers/homepage';
import {BrowserRouter} from 'react-router-dom';
import Dashboard from './containers/dashboard'

import Language from './containers/init/language';
import Themes from './containers/init/themes';
import Personalizing from './containers/init/personalizing';

import Suggestions from './containers/pages/suggestions';
import Coursepage from './containers/pages/coursepage';

import './app.css';

const App = () => (
    <BrowserRouter basename='/frontera'>
        <Dashboard/>
    </BrowserRouter>
);

export default App;