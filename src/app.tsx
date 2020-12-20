import React from 'react';

import Login from './containers/auth/login';
import Registration from './containers/auth/registration';
import ResetPassword from './containers/auth/reset-password';
import Restore from './containers/auth/restore';

import Language from './containers/init/language';
import Themes from './containers/init/themes';
import Personalizing from './containers/init/personalizing';

import './app.css'; 

const App = () => (
    <Themes/>
);

export default App;