import React from 'react';

import style from './style.css';

interface ButtonProps {
  readonly name: string;
}

type ButtonType = React.FunctionComponent<ButtonProps>;

export const Button: ButtonType = ({ name }: ButtonProps) => (
  <button className={style.button} type='submit'>
    {name}
  </button>
);