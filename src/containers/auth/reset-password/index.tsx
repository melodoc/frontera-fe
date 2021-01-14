import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';

import style from '../style.css';

const ResetPassword = () => (
  <React.Fragment>
    <HeaderForm/>
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle type={'reset'} />
      </section>
      <form method={'post'} action={'#'}>
        <div className={style.formWrapper}>
          <p className={style.formItem}>
            <Input type={'password'} />
          </p>
          <p className={style.formItem}>
            <Input type={'repeatPassword'} />
          </p>
        </div>
        <div className={style.buttons}>
          <LinkButton
            to={URLs.home.url}
            as={ConnectedLink}>
            Set Up Password
          </LinkButton>
        </div>
      </form>
      <div className={style.buttons}>
        <LinkButton
          to={URLs.login.url}
          as={ConnectedLink}>
          Cancel
        </LinkButton>
      </div>
    </main>
  </React.Fragment>
);

export default ResetPassword;
