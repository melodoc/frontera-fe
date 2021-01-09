import React from 'react';

import {LinkButton} from './../../../components/link';
import {URLs} from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';
import LoginActions from '../../../components/login-actions/login-actions';
import style from '../style.css';

const Login = () => (
  <React.Fragment>
    <HeaderForm/>
    <main className={style.container}>
      <section>
        <TitleWithSubtitle type={'login'} />
        <form method={'post'} action={'#'}>
          <div className={style.form__wrapper}>
            <p className={style.form__item}>
              <Input type={'email'} />
            </p>
            <p className={style.form__item}>
              <Input type={'password'} />
            </p>
          </div>
          <LoginActions />
          <div className={style.form__buttons}>
            <LinkButton
              type='link'
              to={URLs.lang.url}
              as={ConnectedLink}>
              Login
            </LinkButton>
          </div>
        </form>
        <div className={style.login__buttons}>
          <LinkButton
            type='link'
            to={URLs.registration.url}
            as={ConnectedLink}>
            Sign up
          </LinkButton>
        </div>
      </section>
    </main>
  </React.Fragment>
);

export default Login;
