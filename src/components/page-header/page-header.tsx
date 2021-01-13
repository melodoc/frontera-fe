import React from "react";

import style from "./style.css";

interface PageHeaderProps {
  readonly label: string;
  readonly size?: string;
}

type PageHeaderType = React.FunctionComponent<PageHeaderProps>;

export const PageHeader: PageHeaderType = ({label, size}: PageHeaderProps) => {
      return <h1 className={style.pageHeader}>{label}</h1>;
};
