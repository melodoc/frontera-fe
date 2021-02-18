import React from 'react';

import style from './style.css';

export const ProfileButton = () => (
  <div className={style.wrapper}>
    <div className={style.dropdown}>
      <button className={style.dropdownButton} type="button"></button>
      <span></span>
      <ul className={style.dropdownMenu}>
        <li className={style.dropdopdownItem}>
          <a href="#" className={style.dropdownLink}>view history</a>
        </li>
        <li className={style.dropdopdownItem}>
          <a href="#" className={style.dropdownLink}>settings</a>
        </li>
        <li className={style.dropdopdownItem}>
          <a href="#" className={style.dropdownLink}>help</a>
        </li>
        <li className={style.dropdopdownItem}>
          <a href="#" className={style.dropdownLink}>sign out</a>
        </li>
      </ul>
    </div>
  </div>
);