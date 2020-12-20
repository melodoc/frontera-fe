import React from "react";

import style from "./style.css";

interface FooterProps {
  readonly links: Array<string>;
}

type FooterType = React.FunctionComponent<FooterProps>;

const Footer: FooterType = ({ links }: FooterProps) => {
  let linksTemplate = links.map((linkName) => {
    return (
        <li className={style.footerItem}>
          <a className={style.footerLink} href="#">
            {linkName}
          </a>
        </li>
    );
  });

  return (
    <footer className={style.mainFooter}>
      <ul className={style.footerList}>
        {linksTemplate}
      </ul>
    </footer>
    );
};

export default Footer;
