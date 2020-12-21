import React from 'react';
import style from './style.css';

interface CourseNameProps {
    readonly label: string;
  }

export const CourseName = ({label}:CourseNameProps) => (
    <>
        <h1 className={style.course_name}>{label}</h1>
    </>
)