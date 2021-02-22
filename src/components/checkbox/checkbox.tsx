import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

export const Checkbox = (props: any) => (
    <>
        <input
        id={props.labels}
        className={style.checkbox}
        type={'checkbox'}
        name={props.labels}
        />
        <label
        className={style.checkboxLabel}
        >
            {props.labels}
        </label>
    </>
);