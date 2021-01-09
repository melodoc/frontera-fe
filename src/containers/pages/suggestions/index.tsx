import React from 'react';

import Header from '../../../components/header';
import PageHeader from '../../../components/page-header/page-header';
import Footer from '../../../components/footer/footer'
import SuggestionGallery from '../../../components/suggestion-gallery/suggestion-gallery';

import style from '../style.css';

const Suggestions = () => (
  <div className={style.body}>
    <Header/>
    <main className={style.container}>
      <section className={style.login}>
        <PageHeader label={'Based on your choise'}/>
        <section className={style.gallery}>
          <SuggestionGallery labels={['React', 'CI/CD', 'JavaScript Mastering', 'git']}/>
        </section>
      </section>
    </main>
    <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice']}/>
  </div>
);

export default Suggestions;
