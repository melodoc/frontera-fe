import React from 'react';

import { purpleLogo } from '../../assets';
import style from './style.css';

export const IconLogo = () => (
  <a className={style.navLogo} href="#">
    <img src={purpleLogo} alt="Purple Frontera logo" />
  </a>
);
