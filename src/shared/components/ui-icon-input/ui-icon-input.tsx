import { HTMLInputTypeAttribute } from 'react';
import classnames from 'classnames';

import { IconType } from 'shared/types/icon-type';
import { ButtonType } from 'shared/types/button-type';

import style from './ui-icon-input.module.scss';

interface UIIconInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  buttonType: ButtonType;
  icon: IconType;
  onClick?: () => void;
}

export const UIIconInput: React.FC<UIIconInputProps> = ({ label, type, buttonType, icon, onClick }) => {
  function handleClick(e) {
    e.preventDefault();
    onClick && onClick();
  }

  const classes = classnames(style.input__button, {
    [style.input__button_search]: icon === 'search',
    [style.input__button_heart]: icon === 'heart'
  });

  return (
    <div className={style.input}>
      <button className={classes} onClick={handleClick} type={buttonType} />
      <label className={style.input__label} htmlFor={label}>
        <input className={style.input__input} id={label} type={type} placeholder={label} autoComplete="off" />
      </label>
    </div>
  );
};
