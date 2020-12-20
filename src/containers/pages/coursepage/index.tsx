import React from 'react';

import IconLogo from '../../../components/icon-logo/icon-logo';
import PageHeader from '../../../components/page-header/page-header';
import Navigation from '../../../components/navigation/navigation';
import CourseCards from '../../../components/course-cards/course-cards';
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
        <PageHeader color={'purple'} label={'JavaScript Mastering'} size={'medium'}/>
        <section className={style.gallery}>
          <CourseCards labels={['React', 'CI/CD', 'Dynamics', 'git', 'React', 'CI/CD', 'Dynamics', 'git','React', 'CI/CD', 'Dynamics', 'git', 'React', 'CI/CD', 'Dynamics']}/>
        </section>
      </section>
    </main>
  </div>
);

export default Suggestions;
