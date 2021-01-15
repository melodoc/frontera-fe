import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';

import style from '../style.css';

class Registration extends React.Component {
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
          <section className={style.login}>
            <TitleWithSubtitle type={'registartion'} />
          </section>
          <form method={'post'} action={'#'}>
            <div className={style.formWrapper}>
              <Input inputRef={this.firstInputRef} label="Username" id="username" name="username" type="text" placeholder="Elliot Page" />
              <Input inputRef={this.secondInputRef} label="Email Address" id="userEmail" name="email" type="email" placeholder="email@example.com" />
              <Input inputRef={this.secondInputRef} label="Password" id="password" name="password" type="password" placeholder="••••••" />
              <Input inputRef={this.secondInputRef} label="Repeat password" id="repeatPassword" name="repeatPassword" type="password" placeholder="••••••" />
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
        </main>
      </React.Fragment>
    );
  }
}

export default Registration;
