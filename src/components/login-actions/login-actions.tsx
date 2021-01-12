import React from 'react';

import {LinkReset} from './../link';
import {URLs} from './../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import style from './style.css';
import Checkbox from '../checkbox/checkbox';

const LoginActions = () => (
  <div className={style.formActions}>
    <Checkbox labels={['Remember me']} />
    <LinkReset
      type='link'
      to={URLs.resetpassword.url}
      as={ConnectedLink}
    >
      Forgot Password?
      </LinkReset>
  </div>
);

export default LoginActions;
