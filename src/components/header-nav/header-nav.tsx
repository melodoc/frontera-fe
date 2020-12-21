import React from 'react';
import style from './style.css';
import { Link as ConnectedLink } from "react-router-dom";
import {Link} from './../link/link';
import {URLs} from './../../__data__/urls';

export const HeaderNav = () => (
    <React.Fragment>
        <ul className={style.nav__account}>
            <li className={style.nav__accountItem}>
                <Link 
                    type='link'
                    to={URLs.home.url}
                    as={ConnectedLink}>
                    Home
                </Link>
            </li>
            <li className={style.nav__accountItem}>
                <Link 
                    type='link'
                    to={URLs.login.url}
                    as={ConnectedLink}>
                    Trending
                </Link>
            </li>
            <li className={style.nav__accountItem}>
                <Link 
                    type='link'
                    to={URLs.suggestions.url}
                    as={ConnectedLink}>
                    Suggestions
                </Link>
            </li>
        </ul>
    </React.Fragment>
)