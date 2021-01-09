import React from 'react';

import IconLogo from '../../../components/icon-logo/icon-logo';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Checkbox from '../../../components/checkbox/checkbox';
import Button from '../../../components/button/button';
import Navigation from '../../../components/navigation/navigation';
import Footer from '../../../components/footer/footer';

import style from '../style.css';

const ChooseTheme = () => (
  <div className={style.body}>
    <header className={style.header}>
      <nav className={style.nav}>
        <IconLogo/>
        <Navigation links={['Sign Out']} />
      </nav>
    </header>
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle type={'themes'}/>
      </section>
      <form method={'post'} action={'#'}>
        <div className={style.form__wrapper}>
          <Checkbox labels={['HTML', 'CSS', 'JavaScript', 'git', 'webpack', 'TypeScript']}/>
        </div>
        <div className={style.form__buttons}>
          <Button name={'continue'} />
        </div>
      </form>
    </main>
    <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice', 'Terms', 'HelpDesk']}/>
  </div>
);

export default ChooseTheme;
