import React from 'react';

import style from './style.css';

interface PageHeaderProps {
  readonly label: string;
}

interface CourseHeaderProps {
  readonly label: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ label }) => {
  return <h2 className={style.pageHeader}>{label}</h2>;
};

export const CourseHeader: React.FC<CourseHeaderProps> = ({ label }) => {
  return <h2 className={style.courseHeader}>{label}</h2>;
};