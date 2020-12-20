import React from 'react';

import style from './style.css';
import getValues from '../../handlers/getValues';

const buttonAttributes = [
  {
    key: 'login',
    value: {
      name: 'Login',
    },
  },
  {
    key: 'signUp',
    value: {
      name: 'Sign Up',
    },
  },
  {
    key: 'cancel',
    value: {
      name: 'Cancel',
    },
  },
  {
    key: 'reset',
    value: {
      name: 'Reset',
    },
  },
  {
    key: 'setup',
    value: {
      name: 'Set Up Password',
    },
  },
  {
    key: 'continue',
    value: {
      name: 'Continue',
    },
  },
  {
    key: 'info',
    value: {
      name: 'Info',
    },
  },
];

interface ButtonProps {
  readonly color: string;
  readonly name: string;
}

type ButtonType = React.FunctionComponent<ButtonProps>;

const Button: ButtonType = ({ color, name }: ButtonProps) => {
  const buttonValue = getValues(buttonAttributes, name);

  if (color === 'purple') {
    return (
      <button className={style.form__buttonPurple} type='submit'>
        {buttonValue.name}
      </button>
    );
  }
  return (
    <button className={style.form__button} type='submit'>
      {buttonValue.name}
    </button>
  );
};

export default Button;
