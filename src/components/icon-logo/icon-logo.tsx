import React from 'react';

import {purpleLogo} from '../../assets';
import style from './style.css';

const IconLogo = () => (
  <a className={style.nav__logo} href="#">
    <img src={purpleLogo} width="235" height="43" alt="Purple Frontera logo" />
  </a>
);

export default IconLogo;

