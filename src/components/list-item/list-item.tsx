import React from 'react';

import Checkbox from '../checkbox'

import style from './style.css';

export const ListItem = (props: any) => (
    <li className={style.checkboxItem}>
        <Checkbox labels={props.labels}/>
    </li>
);