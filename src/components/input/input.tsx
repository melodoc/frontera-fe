import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  type?:string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ inputRef, label, id, name, type, ...rest }) => {
  return (
    <p className={style.formItem}>
      <label className={style.formLabel} htmlFor={String(id)}>
        <input
          ref={inputRef}
          className={style.formText}
          id={id}
          type={type}
          name={name}
          {...rest}
        />
        <span>{label}</span>
      </label>
    </p>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'password', 'text' ]),
}

Input.defaultProps = {
  type: 'text',
}