import React from 'react';

import IconLogo from './../icon-logo';
import HeaderNav from './../header-nav';
import AccountBar from './../account-bar/';

import style from './style.css';

export const Header = () => (
    <header className={style.header}>
        <nav className={style.headerNav}>
            <IconLogo />
            <HeaderNav />
        </nav>
        <AccountBar />
    </header>
)