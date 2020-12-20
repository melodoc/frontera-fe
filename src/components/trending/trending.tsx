import React from 'react';
import CourseCards from './../course-cards/course-cards'
import style from './style.css';

export const Trending = () => (
    <div className={style.trending}>
        <h1 className={style.trending_title}>
            Trending
        </h1>
        <div className={style.trending_cards}>
            <CourseCards labels={['Resourses', 'Angular', 'Dynamics', 'Web Design', 'Network', 'SEO']}/>
        </div>
    </div>
)