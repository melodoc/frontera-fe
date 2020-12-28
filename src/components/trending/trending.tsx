import React from 'react';
import CourseCards from './../course-cards/course-cards';
import PageHeader from './../page-header/page-header'
import style from './style.css';

export const Trending = () => (
    <div className={style.trending}>
        <PageHeader color='purple' label='Trending'/>
        <div className={style.trending_cards}>
            <CourseCards cards={[
                {label:'Resourses', imageSrc: ''},
                {label:'Angular', imageSrc: ''},
                {label:'Dynamics', imageSrc: ''},
                {label:'Web Design', imageSrc: ''},
                {label:'Network', imageSrc: ''},
                {label:'SEO', imageSrc: ''}]}/>
        </div>
    </div>
)