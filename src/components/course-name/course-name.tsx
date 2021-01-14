import React from 'react';
import style from './style.css';

interface CourseNameProps {
    readonly label: string;
  }

export const CourseName = ({label}:CourseNameProps) => (
    <>
        <h2 className={style.courseName}>{label}</h2>
    </>
)