import React from 'react';

import {LinkButton} from './../../../components/link';
import {URLs} from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import IconLogo from '../../../components/icon-logo';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Checkbox from '../../../components/checkbox';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';

import style from '../style.css';

const ChooseLanguage = () => (
  <React.Fragment>
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.iconNav}>
          <IconLogo/>
        </div>
        <Navigation links={['Sign Out']} />
      </nav>
    </header>
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle type={'lang'}/>
      </section>
      <form method={'post'} action={'#'}>
        <div className={style.formWrapper}>
          <Checkbox labels={['English', 'Espanol', 'Russian']}/>
        </div>
        <div className={style.buttons}>
          <LinkButton
            type='link'
            to={URLs.themes.url}
            as={ConnectedLink}>
            Continue
          </LinkButton>
        </div>
      </form>
    </main>
    <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice', 'Terms', 'HelpDesk']}/>
  </React.Fragment>
);

export default ChooseLanguage;
