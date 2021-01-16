import React from "react";

import style from "./style.css";

interface PageHeaderProps {
  readonly label: string;
  readonly size?: string;
}

interface CourseHeaderProps {
  readonly label: string;
}

type PageHeaderType = React.FunctionComponent<PageHeaderProps>;

export const PageHeader: PageHeaderType = ({label, size}: PageHeaderProps) => {
  return <h1 className={style.pageHeader}>{label}</h1>;
};

type CourseHeaderType = React.FunctionComponent<CourseHeaderProps>;

export const CourseHeader: CourseHeaderType  = ({label}:CourseHeaderProps) => {
  return <h1 className={style.courseHeader}>{label}</h1>;
}
