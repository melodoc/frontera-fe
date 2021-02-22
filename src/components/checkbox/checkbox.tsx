import React from 'react';

import style from './style.css';

export const Checkbox = (props: any) => (
    <>
        <input
            id={props.labels}
            className={style.checkbox}
            type='checkbox'
            name={props.labels}
        />
        <label
            htmlFor={props.labels}
            className={style.checkboxLabel}
        >
            {props.labels}
        </label>
    </>
);