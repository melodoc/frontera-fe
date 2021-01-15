import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import IconLogo from '../../../components/icon-logo';
import Loader from '../../../components/loader';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';

import style from '../style.css';

class Personalizing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className={style.header}>
          <nav className={style.nav}>
            <div className={style.iconNav}>
              <IconLogo />
            </div>
            <Navigation links={['Sign Out']} />
          </nav>
        </header>
        <main className={style.container}>
          <section className={style.login}>
            <Loader type={'personalizing'} />
            <div className={style.buttons}>
              <LinkButton
                to={URLs.home.url}
                as={ConnectedLink}>
                Home
              </LinkButton>
            </div>
          </section>
        </main>
        <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice', 'Terms', 'HelpDesk']} />
      </React.Fragment>
    );
  }
}

export default Personalizing;
