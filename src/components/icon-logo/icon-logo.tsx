import React from 'react';

import {purpleLogo} from '../../assets';
import style from './style.css';

export const IconLogo = () => (
  <a className={style.navLogo} href="#">
    <img src={purpleLogo} width="235" height="43" alt="Purple Frontera logo" />
  </a>
);

