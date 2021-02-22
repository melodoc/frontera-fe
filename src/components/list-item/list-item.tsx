import React from 'react';

import Checkbox from '../checkbox'

import style from './style.css';

export const ListItem = (props: any) => (
    <li className={style.checkboxItem}>
        <Checkbox label={props.label} isCheked={props.checked}/>
    </li>
);