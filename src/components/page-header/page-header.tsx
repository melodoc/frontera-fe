import React from "react";

import style from "./style.css";

interface PageHeaderProps {
  readonly label: string;
}

interface CourseHeaderProps {
  readonly label: string;
}

type PageHeaderType = React.FunctionComponent<PageHeaderProps>;

export const PageHeader: PageHeaderType = ({ label }: PageHeaderProps) => {
  return <h2 className={style.pageHeader}>{label}</h2>;
};

type CourseHeaderType = React.FunctionComponent<CourseHeaderProps>;

export const CourseHeader: CourseHeaderType = ({ label }: CourseHeaderProps) => {
  return <h2 className={style.courseHeader}>{label}</h2>;
};
