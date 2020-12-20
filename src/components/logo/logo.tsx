import React from 'react';

import style from './style.css';
import svgLogo from '../../assets/index';

const Logo = () => (
  <nav className={style.nav}>
    <a className={style.nav__logo}>
      <img
        src={svgLogo}
        width='235'
        height='43'
        alt='FrontEra logo'
      />
    </a>
  </nav>
);

export default Logo;