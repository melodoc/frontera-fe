import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({ label, value, type, name, ...rest }) => {
  return (
    <div className={style.formItem}>
        <input
          className={style.formText}
          name={name}
          value={value}
          type={type}
          {...rest}
        />
        {label && <label className={style.formLabel} htmlFor={String(rest.id)}>{label}</label>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: void 0
};