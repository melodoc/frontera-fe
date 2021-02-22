import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';

import style from '../style.css';

class Registration extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HeaderForm />
        <main className={style.container}>
          <section className={style.form}>
            <TitleWithSubtitle type={'registartion'} />
            <form method="post" action="#">
              <div className={style.formWrapper}>
                <Input label="Username" id="username" name="username" type="text" placeholder="Elliot Page" />
                <Input label="Email Address" id="userEmail" name="email" type="email" placeholder="email@example.com" />
                <Input label="Password" id="password" name="password" type="password" placeholder="••••••" />
                <Input label="Repeat password" id="repeatPassword" name="repeatPassword" type="password" placeholder="••••••" />
              </div>
              <div className={style.buttons}>
                <LinkButton
                  to={URLs.home.url}
                  as={ConnectedLink}>
                  Sign up
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
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Registration;
