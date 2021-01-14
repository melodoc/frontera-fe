import React, { HTMLAttributes } from 'react';

import style from './style.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  type:string;
}

export const Input: React.FC<InputProps> = ({ label, id, name, type='text', ...rest }) => {
  return (
    <p className={style.formItem}>
      <label className={style.formLabel} htmlFor={String(id)}>
        <input
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