import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type?: string;
  inputRef?: any;
  name?: string;
}

export const Input: React.FC<InputProps> = ({ label, value, type, inputRef, name, ...rest }) => {
  return (
    <div className={style.formItem}>
        {label && <label className={style.formLabel} htmlFor={String(rest.id)}>{label}</label>}
        <input
            name={name}
          className={style.formText}
          value={value}
          type={type}
          {...rest}
        />
    </div>
  );
};

Input.propTypes = {
  inputRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
  ]),
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  inputRef: void 0,
    name: void 0
};