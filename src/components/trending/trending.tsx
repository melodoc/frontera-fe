import React from 'react';
import PageHeader from './../page-header/page-header'
import style from './style.css';
import { CourseCards } from '../../components/course-cards/course-cards';


export const Trending = () => (
    <div className={style.trending}>
        <PageHeader color='purple' label='Trending'/>
        <div className={style.trending_cards}>
            <CourseCards showNumber={true} cards={[
                {label:'Resourses', imageSrc: ''},
                {label:'Angular', imageSrc: ''},
                {label:'Dynamics', imageSrc: ''},
                {label:'Web Design', imageSrc: ''},
                {label:'Network', imageSrc: ''},
                {label:'SEO', imageSrc: ''}]}/>
        </div>
    </div>
)