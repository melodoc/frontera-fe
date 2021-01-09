import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import style from '../style.css';

const COLOR = 'purple';

const Restore = () => (
  <React.Fragment>
    <HeaderForm color={COLOR} />
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle color={COLOR} type={'restore'}/>
      </section>
      <form method={'post'} action={'https://echo.imaginary-server.ru'}>
        <div className={style.form__wrapper}>
          <p className={style.form__itemSingle}>
            <Input type={'email'} />
          </p>
        </div>
        <div className={style.form__buttons }>
          <Button color={COLOR} name={'reset'} />
        </div>
      </form>
      <div className={style.login__buttons}>
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

export default Restore;
