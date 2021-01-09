import React from 'react';

import {LinkButton} from './../../../components/link';
import {URLs} from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import IconLogo from '../../../components/icon-logo/icon-logo';
import Loader from '../../../components/loader';
import Navigation from '../../../components/navigation/navigation';
import Footer from '../../../components/footer/footer';

import style from '../style.css';

const Personalizing = () => (
  <div className={style.body}>
    <header className={style.header}>
      <nav className={style.nav}>
        <IconLogo color={'purple'} />
        <Navigation links={['Sign Out']} />
      </nav>
    </header>
    <main className={style.container}>
      <section className={style.login}>
        <Loader type={'personalizing'}/>
        <div className={style.form__buttons}>
        <div className={style.form__buttons}>
          <LinkButton
            type='link'
            to={URLs.home.url}
            as={ConnectedLink}>
            Home
          </LinkButton>
        </div>
        </div>
      </section>
    </main>
    <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice', 'Terms', 'HelpDesk']}/>
  </div>
);

export default Personalizing;
