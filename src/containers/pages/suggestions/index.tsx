import React from 'react';

import Header from '../../../components/header';
import PageHeader from '../../../components/page-header/page-header';
import Footer from '../../../components/footer/footer'

import style from '../style.css';
import { CourseCardsLarge } from '../../../components/course-cards/course-cards';


const Suggestions = () => (
  <div className={style.body}>
    <Header/>
    <main className={style.container}>
      <section className={style.login}>
        <PageHeader color={'purple'} label={'Based on your choise'} size={'medium'}/>
        <section className={style.gallery}>
            <CourseCardsLarge showNumber={false} cards={[{label:'React', imageSrc: ''},
                {label:'CI/CD', imageSrc: ''},
                {label:'JavaScript Mastering', imageSrc: ''},
                {label:'git', imageSrc: ''}]}/>
        </section>
      </section>
    </main>
    <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice']}/>
  </div>
);

export default Suggestions;
