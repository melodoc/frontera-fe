import React from 'react';

import Header from '../../../components/header';
import PageHeader from '../../../components/page-header';

import { CourseCardsLarge } from '../../../components/course-cards/course-cards';

import style from '../style.css';

class Suggestions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={style.container}>
          <section className={style.login}>
            <PageHeader label={'Based on your choise'} />
            <section className={style.gallery}>
              <CourseCardsLarge showNumber={false} cards={[
                { label: 'React', imageSrc: '' },
                { label: 'CI/CD', imageSrc: '' },
                { label: 'JavaScript Mastering', imageSrc: '' },
                { label: 'git', imageSrc: '' }]} />
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Suggestions;
