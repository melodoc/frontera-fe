import React from 'react';

import Logo from '../../../components/logo/logo';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import style from './style.css';

const ResetPassword = () => (
  <div className={style.body}>
    <header className={style.header}>
      <Logo />
    </header>
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle type={'reset'}/>
      </section>
      <form method={'post'} action={'https://echo.imaginary-server.ru'}>
        <div className={style.form__wrapper}>
          <p className={style.form__item}>
            <Input type={'password'} />
          </p>
          <p className={style.form__item}>
            <Input type={'repeatPassword'} />
          </p>
        </div>
        <div className={style.form__buttons }>
          <Button name={'setup'}/>
        </div>
      </form>
      <div className={style.login__buttons}>
          <Button name={'cancel'} />
      </div>
    </main>
  </div>
);

export default ResetPassword;
