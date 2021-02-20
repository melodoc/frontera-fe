import React from 'react';

import IconLogo from '../icon-logo';

import style from './style.css';

export const HeaderFrom = () => (
    <header>
        <nav className={style.headerNav}>
            <IconLogo />
        </nav>
    </header>
)