import React from 'react';

import IconLogo from '../../../components/icon-logo/';
import {PageHeader} from '../../../components/page-header';
import Navigation from '../../../components/navigation';
import AccountBar from '../../../components/account-bar/';
import { CourseCards } from '../../../components/course-cards/course-cards';

import style from '../style.css';

const Coursepage = () => (
    <div className={style.body}>
        <header className={style.header}>
            <nav className={style.userNav}>
                <div className={style.userNav}>
                    <IconLogo/>
                    <Navigation links={['Home', 'Trending', 'Suggestions']} />
                </div>
                <AccountBar/>
            </nav>
        </header>
        <main className={style.container}>
            <section className={style.login}>
                <PageHeader label={'JavaScript Mastering'} size={'medium'}/>
                <section className={style.gallery}>
                    <CourseCards cards={[
                        {label:'React', imageSrc: '../../assets/images/code.jpg'},
                        {label:'CI/CD', imageSrc: ''},
                        {label:'Dynamics', imageSrc: ''},
                        {label:'git', imageSrc: ''},
                        {label:'React', imageSrc: ''},
                        {label:'CI/CD', imageSrc: ''},
                        {label:'Dynamics', imageSrc: ''},
                        {label:'git', imageSrc: ''},
                        {label:'React', imageSrc: ''},
                        {label:'CI/CD', imageSrc: ''},
                        {label:'Dynamics', imageSrc: ''},
                        {label:'git', imageSrc: ''},
                        {label:'React', imageSrc: ''},
                        {label:'CI/CD', imageSrc: ''},
                        {label:'Dynamics', imageSrc: ''}]}/>
                </section>
            </section>
        </main>
    </div>
);

export default Coursepage;
