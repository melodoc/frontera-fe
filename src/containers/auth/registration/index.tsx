import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';

import style from '../style.css';

const Registration = () => (
  <React.Fragment>
    <HeaderForm />
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle type={'registartion'} />
      </section>
      <form method={'post'} action={'#'}>
        <div className={style.formWrapper}>
          <p className={style.formItem}>
            <Input type={'username'} />
          </p>
          <p className={style.formItem}>
            <Input type={'email'} />
          </p>
          <p className={style.formItem}>
            <Input type={'password'} />
          </p>
          <p className={style.formItem}>
            <Input type={'repeatPassword'} />
          </p>
        </div>
        <div className={style.buttons}>
          <LinkButton
            type='link'
            to={URLs.home.url}
            as={ConnectedLink}>
            Sign up
          </LinkButton>
        </div>
      </form>
      <div className={style.buttons}>
        <LinkButton
          type='link'
          to={URLs.login.url}
          as={ConnectedLink}>
          Cancel
        </LinkButton>
      </div>
    </main>
  </React.Fragment>
);

export default Registration;
