import React from 'react';

import style from './style.css';

const AccountBar = () => (
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
      <div className={style.profile}>
      <div className={style.navDropdown}>
        <p>view history</p>
        <p>settings</p>
        <p>help</p>
        <p>sign out</p>
      </div>
      </div>
    </li>
  </ul>
);

// TODO add showmenu
const showMenu = () => {
}

export default AccountBar;
