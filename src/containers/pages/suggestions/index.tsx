import React from 'react';

import Header from '../../../components/header';
import {PageHeader} from '../../../components/page-header';

import style from '../style.css';
import { CourseCardsLarge } from '../../../components/course-cards/course-cards';


const Suggestions = () => (
  <div className={style.body}>
    <Header/>
    <main className={style.container}>
      <section className={style.login}>
        <PageHeader label={'Based on your choise'}/>
        <section className={style.gallery}>
            <CourseCardsLarge showNumber={false} cards={[{label:'React', imageSrc: ''},
                {label:'CI/CD', imageSrc: ''},
                {label:'JavaScript Mastering', imageSrc: ''},
                {label:'git', imageSrc: ''}]}/>
        </section>
      </section>
    </main>
  </div>
);

export default Suggestions;
