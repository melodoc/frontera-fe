import React from 'react';

import style from './style.css';

interface ButtonProps {
  readonly name: string;
}

export const Button: React.FC<ButtonProps> = ({ name }) => (
  <button className={style.button} type='submit'>
    {name}
  </button>
);