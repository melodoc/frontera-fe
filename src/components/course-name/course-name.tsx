import React from 'react';
import style from './style.css';

interface CourseNameProps {
    readonly label: string;
}

export const CourseName: React.FC<CourseNameProps> = ({ label }) => (
    <h2 className={style.courseName}>{label}</h2>
)