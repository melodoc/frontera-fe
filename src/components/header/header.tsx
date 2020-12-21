import React from 'react';
import style from './style.css';
import IconLogo from './../icon-logo/icon-logo';
import HeaderNav from './../header-nav';
import AccountBar from './../account-bar/account-bar';
import Navigation from './../navigation/navigation';

export const Header = () => (
    <header className={style.header}>
        <div className={style.header_logo}>
            <IconLogo color="purple"/>
        </div>
        <div className={style.header_nav}>
            <HeaderNav/>
        </div>
        <div className={style.header_icons}>
            <AccountBar/>
        </div>
    </header>
)