import React from 'react';

import {whiteLogo, 
  purpleLogo
} from '../../assets';
import style from './style.css';

interface IconLogoProps {
  readonly color: string;
}

type IconLogoType = React.FunctionComponent<IconLogoProps>;

const IconLogo: IconLogoType = ({color}: IconLogoProps) => {
  if (color === 'purple') {
    console.log(purpleLogo);
    return (
      <a className={style.nav__logo}>
        <img src={purpleLogo} width="235" height="43" alt="Purple Frontera logo" />
      </a>
    );
  }
  return (
    <a className={style.nav__logo}>
      <img src={whiteLogo} width="235" height="43" alt="White Frontera logo" />
    </a>
  );
};

export default IconLogo;

