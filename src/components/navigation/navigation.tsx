import React from "react";

import style from "./style.css";

interface NavigationProps {
  readonly links: Array<string>;
}

type NavigationType = React.FunctionComponent<NavigationProps>;

const Navigation: NavigationType = ({ links }: NavigationProps) => {
  let linksTemplate = links.map((linkName) => {
    return (
        <li className={style.nav__accountItem}>
          <a className={style.nav__accountLink} href="#">
            {linkName}
          </a>
        </li>
    );
  });

  return (
      <ul className={style.nav__account}>
        {linksTemplate}
      </ul>
    );
};

export default Navigation;
