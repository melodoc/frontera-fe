import React from 'react';

import style from './style.css';

export const AccountBar = () => (
  <ul className={style.accountBar}>
    <li className={style.searchInput}>
      <form className={style.searchForm}> 
      <label htmlFor="search">
        <input id="search"type="text" placeholder="Search..." />
      </label>
        <button type="submit"></button>
      </form>
    </li>
    <li className={style.profileWrapper}>
      <div className={style.dropdown}>
        <button className={style.profile} type="button"></button>
        <div className={style.navDropdown}>
          <a href="#" className={style.dropdownLink}>view history</a>
          <a href="#" className={style.dropdownLink}>settings</a>
          <a href="#" className={style.dropdownLink}>help</a>
          <a href="#" className={style.dropdownLink}>sign out</a>
        </div>
      </div>
    </li>
  </ul>
);