import React from 'react';

import style from './style.css';
import Link from '../link/link';
import Checkbox from '../checkbox/checkbox';

const LoginActions = () => (
  <div className={style.form__actions}>
    <Checkbox type={'remember'} />
    <Link name={'Forgot Password?'}/>
  </div>
);

export default LoginActions;
