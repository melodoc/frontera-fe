import React from "react";

import style from "./style.css";

interface PageHeaderProps {
  readonly color: string;
  readonly label: string;
  readonly size?: string;
}

type PageHeaderType = React.FunctionComponent<PageHeaderProps>;

const PageHeader: PageHeaderType = ({color, label, size}: PageHeaderProps) => {
  if (color === "purple") {
      return <h1 className={style.pageHeader}>{label}</h1>;
  }
    return <h1 className={style.pageHeaderWhite}>{label}</h1>;
};

export default PageHeader;
