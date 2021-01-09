import React from 'react';
import CourseCards from './../course-cards/course-cards';
import PageHeader from './../page-header/page-header'
import style from './style.css';

export const Trending = () => (
    <div className={style.trending}>
        <PageHeader label='Trending'/>
        <div className={style.trending_cards}>
            <CourseCards labels={['Resourses', 'Angular', 'Dynamics', 'Web Design', 'Network', 'SEO']}/>
        </div>
    </div>
)