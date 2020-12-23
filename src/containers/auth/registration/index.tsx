import React from 'react';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import style from '../style.css';

const COLOR = 'purple';

const Registration = () => (
  <React.Fragment>
    <HeaderForm color={COLOR} />
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle color={COLOR} type={'registartion'} />
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
        <div className={style.form__buttons}>
          <Button color={COLOR} name={'signUp'} />
        </div>
      </form>
      <div className={style.login__buttons}>
        <Button color={COLOR} name={'cancel'} />
      </div>
    </main>
  </React.Fragment>
);

export default Registration;
