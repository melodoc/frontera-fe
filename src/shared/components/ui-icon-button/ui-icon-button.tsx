import classnames from 'classnames';

import { ButtonType } from 'shared/types/button-type';
import { IconType } from 'shared/types/icon-type';

import style from './ui-icon-button.module.scss';

interface UIIconButtonProps {
  label: string;
  buttonType: ButtonType;
  icon: IconType;
  onClick?: () => void;
}

export const UIIconButton: React.FC<UIIconButtonProps> = ({ label, buttonType, icon, onClick }) => {
  function handleClick(e) {
    e.preventDefault();
    onClick && onClick();
  }

  const classes = classnames(style.input__button, {
    [style.input__button_user]: icon === 'user'
  });

  return (
    <button className={classes} onClick={handleClick} type={buttonType}>
      {label}
    </button>
  );
};
