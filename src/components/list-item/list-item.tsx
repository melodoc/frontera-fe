import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox'

import style from './style.css';

interface ListItemProps {
    readonly labels: Array<{ name: string}>;
}

export const ListItem = (props: any) => (
    <li className={style.checkboxItem}>
        <Checkbox labels={props.labels}/>
    </li>
);