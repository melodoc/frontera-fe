/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

import style from "./footer.module.scss";

interface FooterProps {
  readonly links: Array<string>;
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  const linksTemplate = links.map((linkName, key) => (
    <li className={style.FooterItem} key={linkName + key}>
      <a className={style.FooterLink} href="">
        {linkName}
      </a>
    </li>
  ));

  return (
    <footer className={style.FooterWrapper}>
      <ul className={style.FooterList}>{linksTemplate}</ul>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.array.isRequired,
};

Footer.defaultProps = {
  links: ["No links"],
};
