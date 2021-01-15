import React from 'react';

import { LinkButton, LinkReset } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';
import LoginActions from '../../../components/login-actions';

import style from '../style.css';

class Login extends React.Component {
  firstInputRef = React.createRef<HTMLInputElement>();
  secondInputRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    this.firstInputRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <HeaderForm />
        <main className={style.container}>
          <section>
            <TitleWithSubtitle type={'login'} />
            <form method={'post'} action={'#'}>
              <div className={style.formWrapper}>
                <Input inputRef={this.firstInputRef} label="Email Address" id="userEmail" name="email" type="email" placeholder="email@example.com" />
                <Input inputRef={this.secondInputRef} label="Password" id="password" name="password" type="password" placeholder="••••••" />
              </div>
              <LoginActions />
              <div className={style.buttons}>
                <LinkButton
                  to={URLs.lang.url}
                  as={ConnectedLink}>
                  Login now
                </LinkButton>
              </div>
            </form>
            <LinkReset
              to={URLs.registration.url}
              as={ConnectedLink}>
              Don't have an account? Join free today
            </LinkReset>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Login;
