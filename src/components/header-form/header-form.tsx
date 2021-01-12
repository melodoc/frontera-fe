import React from 'react';
import style from './style.css';

import IconLogo from '../icon-logo/icon-logo';

export const HeaderFrom = () => (
    <React.Fragment>
        <header className={style.header}>
            <nav className={style.headerNav}>
                <IconLogo/>
            </nav>
        </header>
    </React.Fragment>
)