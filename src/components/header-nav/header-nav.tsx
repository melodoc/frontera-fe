import React from 'react';
import style from './style.css';

interface HeaderNavProps {
    linkName: string;
    linkAdress: string;
}

export const HeaderNav = ({linkName, linkAdress}: HeaderNavProps) => (
    <React.Fragment>
        <a href={linkAdress} className={style.header_nav_item}>
            {linkName}
        </a>
    </React.Fragment>
)