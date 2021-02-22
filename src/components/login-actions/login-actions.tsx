import React from 'react';

import { LinkReset } from './../link';
import { URLs } from './../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import Checkbox from '../checkbox';
import List from '../checkbox';

import style from './style.css';

export const LoginActions = () => (
  <div className={style.formActions}>
    <List labels={['Remember me']}>
      <Checkbox/>
    </List>
    <LinkReset
      to={URLs.resetpassword.url}
      as={ConnectedLink}
    >
      Forgot Password?
      </LinkReset>
  </div>
);
