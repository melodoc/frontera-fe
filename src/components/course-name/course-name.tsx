import React from 'react';
import style from './style.css';

interface CourseNameProps {
    readonly label: string;
  }

export const CourseName: React.FC<CourseNameProps> = ({label}) => (
    <React.Fragment>
        <h2 className={style.courseName}>{label}</h2>
    </React.Fragment>
)