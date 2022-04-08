import React from "react";

import style from "./page-header.module.scss";

interface PageHeaderProps {
  readonly label: string;
}

interface CourseHeaderProps {
  readonly label: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ label }) => (
  <h2 className={style.pageHeader}>{label}</h2>
);

export const CourseHeader: React.FC<CourseHeaderProps> = ({ label }) => (
  <h2 className={style.courseHeader}>{label}</h2>
);
