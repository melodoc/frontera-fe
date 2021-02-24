import React from 'react';

import style from './style.css';

export const SearchInput = () => {
  function handleClick(e) {
    e.preventDefault();
  }

 return (
    <div className={style.searchInput}>
    <form className={style.searchForm}>
      <label htmlFor="search">
        <input id="search" type="text" placeholder="Search..." />
      </label>
      <button onClick={handleClick} type="submit"></button>
    </form>
  </div>
);
}