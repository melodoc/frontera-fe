import React from 'react';

import { Link as ConnectedLink } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';

import { LinkButton, LinkReset } from '../../../components/link';
import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';
import LoginActions from '../../../components/login-actions';

import style from '../style.css';

class Login extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HeaderForm />
        <main className={style.container}>
          <section className={style.form}>
            <TitleWithSubtitle type={'login'} />
            <form method="post" action="#">
              <div className={style.formWrapper}>
                <Input label="Email Address" id="userEmail" name="email" type="email" />
                  <div className={style.devider}/>
                <Input label="Password" id="password" name="password" type="password" />
              </div>
              <LoginActions />
              <div className={style.buttons}>
                <LinkButton
                  to={URLs.personalizations.url}
                  as={ConnectedLink}>
                  Login now
                </LinkButton>
              </div>
            </form>
            <LinkReset
              to={URLs.registration.url}
              as={ConnectedLink}>
              Don`t have an account? Join free today
            </LinkReset>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Login;
