import React from 'react';

import IconLogo from '../../../components/icon-logo/icon-logo';
import PageHeader from '../../../components/page-header/page-header';
import Navigation from '../../../components/navigation/navigation';
import Footer from '../../../components/footer/footer'
import SuggestionGallery from '../../../components/suggestion-gallery/suggestion-gallery';
import AccountBar from '../../../components/account-bar/account-bar';

import style from '../style.css';

const Suggestions = () => (
  <div className={style.body}>
    <header className={style.header}>
      <nav className={style.userNav}>
        <div className={style.userNav}>
          <IconLogo color={'purple'} />
          <Navigation links={['Home', 'Trending', 'Suggestions']} />
        </div>
        <AccountBar/>
      </nav>
    </header>
    <main className={style.container}>
      <section className={style.login}>
        <PageHeader color={'purple'} label={'Based on your choise'} size={'medium'}/>
        <section className={style.gallery}>
          <SuggestionGallery labels={['React', 'CI/CD', 'JavaScript Mastering', 'git']}/>
        </section>
      </section>
    </main>
    <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice']}/>
  </div>
);

export default Suggestions;
