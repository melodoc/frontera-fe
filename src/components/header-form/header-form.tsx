import React from 'react';
import style from './style.css';

import IconLogo from '../icon-logo/icon-logo';

interface HeaderFromProps {
    color: string;
}

export const HeaderFrom = ({ color }: HeaderFromProps) => (
    <React.Fragment>
        <header className={style.header}>
            <nav className={style.nav}>
                <IconLogo color={color}/>
            </nav>
        </header>
    </React.Fragment>
)