import React from 'react';

import style from './style.css';
import getValues from '../../handlers/getValues';

const checkboxAttributes = [
  {
    key: 'remember',
    value: {
      htmlFor: 'userRemember',
      id: 'userRemember',
      type: 'checkbox',
      name: 'remember',
      inputText: 'Remember Me',
    },
  },
];

interface CheckboxProps {
  readonly type: string;
}

type CheckboxType = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxType = ({ type }: CheckboxProps) => {
  const checkboxValue = getValues(checkboxAttributes, type);

return (
<p className={style.form__remember}>
      <input className={style.form__checkbox} id={checkboxValue.id} type={checkboxValue.type} name={checkboxValue.name}/>
      <label className={style.form__checkboxLabel} htmlFor={checkboxValue.htmlFor}>
        <span>{checkboxValue.inputText}</span>
      </label>
</p>
);
}
export default Checkbox;