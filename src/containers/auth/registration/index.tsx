import React from 'react';

import IconLogo from '../../../components/icon-logo/icon-logo';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import style from '../style.css';

const Registration = () => (
  <div className={style.body}>
    <header className={style.header}>
    <nav className={style.nav}>
          <IconLogo color={'white'} />
      </nav>
    </header>
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle color={'white'} type={'registartion'} />
      </section>
      <form method={'post'} action={'https://echo.imaginary-server.ru'}>
        <div className={style.form__wrapper}>
          <p className={style.form__item}>
            <Input type={'username'} />
          </p>
          <p className={style.form__item}>
            <Input type={'email'} />
          </p>
          <p className={style.form__item}>
            <Input type={'password'} />
          </p>
          <p className={style.form__item}>
            <Input type={'repeatPassword'} />
          </p>
        </div>
        <div className={style.form__buttons }>
          <Button color={'white'} name={'signUp'} />
        </div>
      </form>
      <div className={style.login__buttons}>
          <Button color={'white'} name={'cancel'} />
      </div>
    </main>
  </div>
);

export default Registration;
