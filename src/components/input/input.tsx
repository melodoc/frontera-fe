import React from 'react';

import style from './style.css';
import getValues from '../../handlers/getValues';

const inputAttributes = [
  {
    key: 'email',
    value: {
      htmlFor: 'userEmail',
      id: 'userEmail',
      type: 'email',
      name: 'email',
      placeholder: 'email@example.com',
      inputText: 'Email Address',
      isRequired: true,
    },
  },
  {
    key: 'repeatEmail',
    value: {
      htmlFor: 'repeatUserEmail',
      id: 'repeatUserEmail',
      type: 'email',
      name: 'repeatEmail',
      placeholder: 'email@example.com',
      inputText: 'Repeat Email Address',
      isRequired: true,
    },
  },
  {
    key: 'username',
    value: {
      htmlFor: 'username',
      id: 'username',
      type: 'text',
      name: 'username',
      placeholder: 'Elliot Page',
      inputText: 'Username',
      isRequired: true,
    },
  },
  {
    key: 'password',
    value: {
      htmlFor: 'password',
      id: 'password',
      type: 'password',
      name: 'password',
      placeholder: '••••••',
      inputText: 'Password',
      isRequired: true,
    },
  },
  {
    key: 'repeatPassword',
    value: {
      htmlFor: 'repeatPassword',
      id: 'repeatPassword',
      type: 'password',
      name: 'repeatPassword',
      placeholder: '••••••',
      inputText: 'Repeat password',
      isRequired: true,
    },
  },
];

interface InputProps {
  readonly type: string;
}

type InputType = React.FunctionComponent<InputProps>;

const Input: InputType = ({ type }: InputProps) => {
  const inputValue = getValues(inputAttributes, type);
  return (
    <label className={style.form__label} htmlFor={inputValue.htmlFor}>
      <input
        className={style.form__text}
        id={inputValue.id}
        type={inputValue.type}
        name={inputValue.name}
        placeholder={inputValue.placeholder}
        required={inputValue.isRequired}
      />
      <span>{inputValue.inputText}</span>
    </label>
  );
};

export default Input;
