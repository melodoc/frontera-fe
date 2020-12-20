import React from 'react';

import style from './style.css';
import Checkbox from '../checkbox/checkbox';

const LoginActions = () => (
  <div className={style.form__actions}>
    <Checkbox color={'white'} labels={['Remember me']} />
    <a className={style.form__restore} href='#'>{'Forgot Password?'}</a>
  </div>
);

export default LoginActions;
