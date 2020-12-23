import React from 'react';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import style from '../style.css';

const COLOR = 'purple';

const ResetPassword = () => (
  <React.Fragment>
    <HeaderForm color={COLOR} />
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle color={COLOR} type={'reset'}/>
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
          <Button color={COLOR} name={'setup'}/>
        </div>
      </form>
      <div className={style.login__buttons}>
          <Button color={COLOR} name={'cancel'} />
      </div>
    </main>
  </React.Fragment>
);

export default ResetPassword;
