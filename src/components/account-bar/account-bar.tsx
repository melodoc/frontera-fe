import React from 'react';
import i18next from 'i18next';
import style from './style.css';

export const AccountBar = () => (
  <ul className={style.accountBar}>
    <li className={style.searchInput}>
      <form className={style.searchForm}>
        <label htmlFor="search">
          <input id="search" type="text" placeholder="Search..." />
        </label>
        <button type="submit"></button>
      </form>
    </li>
    <li className={style.profileWrapper}>
      <div className={style.dropdown}>
        <button className={style.profile} type="button"></button>
        <div className={style.navDropdown}>
          <a href="#" className={style.dropdownLink}>{ i18next.t('js.navigation.viewHistory') }</a>
          <a href="#" className={style.dropdownLink}>{ i18next.t('js.navigation.settings') }</a>
          <a href="#" className={style.dropdownLink}>{ i18next.t('js.navigation.help') }</a>
          <a href="#" className={style.dropdownLink}>{ i18next.t('js.navigation.out') }</a>
        </div>
      </div>
    </li>
  </ul>
);