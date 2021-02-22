import React from 'react';

import Header from '../../../components/header/index';
import { PageHeader } from '../../../components/page-header';
import { CourseInfo } from '../../../components/course-info/course-info';
import { CourseCards } from '../../../components/course-cards/course-cards';

import style from '../style.css';

class Coursepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className={style.container}>
                    <PageHeader label={'JavaScript Mastering'} />
                    <CourseInfo/>
                    <section className={style.gallery}>
                        <CourseCards cards={[
                            { label: 'React', imageSrc: '../../assets/images/code.jpg' },
                            { label: 'CI/CD', imageSrc: '' },
                            { label: 'Dynamics', imageSrc: '' },
                            { label: 'git', imageSrc: '' },
                            { label: 'React', imageSrc: '' },
                            { label: 'CI/CD', imageSrc: '' },
                            { label: 'Dynamics', imageSrc: '' },
                            { label: 'git', imageSrc: '' },
                            { label: 'React', imageSrc: '' },
                            { label: 'CI/CD', imageSrc: '' },
                            { label: 'Dynamics', imageSrc: '' },
                            { label: 'git', imageSrc: '' },
                            { label: 'React', imageSrc: '' },
                            { label: 'CI/CD', imageSrc: '' },
                            { label: 'Dynamics', imageSrc: '' }]} />
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Coursepage;
