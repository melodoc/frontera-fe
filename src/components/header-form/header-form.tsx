import React from 'react';
import style from './style.css';

import IconLogo from '../icon-logo';

export const HeaderFrom = () => (
    <header className={style.header}>
        <nav className={style.headerNav}>
            <IconLogo />
        </nav>
    </header>
)