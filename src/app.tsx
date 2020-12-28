import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Dashboard from './containers/dashboard';

import './app.css';

const App = () => (
    <BrowserRouter basename='/frontera'>
        <Dashboard/>
    </BrowserRouter>
);

export default App;