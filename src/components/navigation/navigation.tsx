import React from "react";

import style from "./style.css";

interface NavigationProps {
  readonly links: Array<string>;
}

export const Navigation: React.FC<NavigationProps> = ({ links}) => {
  let linksTemplate = links.map((linkName) => {
    return (
        <li className={style.navAccountItem}>
          <a className={style.navAccountLink} href="#">
            {linkName}
          </a>
        </li>
    );
  });

  return (
      <ul className={style.navAccount}>
        {linksTemplate}
      </ul>
    );
};
