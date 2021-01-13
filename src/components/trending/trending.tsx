import React from 'react';
import PageHeader from './../page-header'
import style from './style.css';
import { CourseCards } from '../../components/course-cards/course-cards';


export const Trending = () => (
    <div className={style.trending}>
        <PageHeader label='Trending'/>
            <CourseCards showNumber={true} cards={[
                {label:'Resourses', imageSrc: ''},
                {label:'Angular', imageSrc: ''},
                {label:'Dynamics', imageSrc: ''},
                {label:'Web Design', imageSrc: ''},
                {label:'Network', imageSrc: ''},
                {label:'SEO', imageSrc: ''}]}/>
    </div>
)