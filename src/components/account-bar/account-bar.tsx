import React from 'react';

import SearchInput from '../search-input';
import ProfileButton from '../profile-button';

import style from './style.css';

export const AccountBar = () => (
  <div className={style.accountBar}>
    <SearchInput/>
    <ProfileButton/>
  </div>
);