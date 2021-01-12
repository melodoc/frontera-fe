import React from 'react';
import style from './style.css';
import IconLogo from './../icon-logo/icon-logo';
import HeaderNav from './../header-nav';
import AccountBar from './../account-bar/account-bar';

export const Header = () => (
    <header className={style.header}>
        <nav className={style.headerNav}>
            <IconLogo/>
            <HeaderNav/>
        </nav>
            <AccountBar/>
    </header>
)