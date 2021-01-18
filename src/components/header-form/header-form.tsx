import React from 'react';

import IconLogo from '../icon-logo';

import style from './style.css';

export const HeaderFrom = () => (
    <header className={style.header}>
        <nav className={style.headerNav}>
            <IconLogo />
        </nav>
    </header>
)