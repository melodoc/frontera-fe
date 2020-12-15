import React from 'react';

import style from './style.css';

const Link = ({name}) => (
    <a className={style.form__restore} href='#'>{name}</a>
);

export default Link;