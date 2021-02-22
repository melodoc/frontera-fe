import React from 'react';

import style from './style.css';

export const SearchInput = () => (
  <div className={style.searchInput}>
    <form className={style.searchForm}>
      <label htmlFor="search">
        <input id="search" type="text" placeholder="Search..." />
      </label>
      <button type="submit"></button>
    </form>
  </div>
);