import React, { useState } from 'react';
import PropTypes from 'prop-types'

import style from './style.css';

export const Checkbox = (props) => {
    const [cheked, setCheck] = useState(props.isCheked)
    const handleChange = () => {
        setCheck(!cheked)
    }
    return (
        <>
            <input
                id={props.label}
                className={style.checkbox}
                type='checkbox'
                name={props.label}
                checked={cheked}
                onChange={handleChange}
            />
            <label
                htmlFor={props.label}
                className={style.checkboxLabel}
            >
                {props.label}
            </label>
        </>
    );
}

Checkbox.propTypes = {
    isCheked: PropTypes.bool,
    label: PropTypes.string.isRequired
}

Checkbox.defaultProps = {
    isCheked: false
}


