import React, { AllHTMLAttributes, ButtonHTMLAttributes, Children, DetailedHTMLProps } from 'react';

import style from './style.css';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <button
    {...rest} 
    className={style.button}
  >
    {children}
  </button>
);