import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface FooterProps {
  readonly links: Array<string>;
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  const linksTemplate = links.map((linkName, key) => {
    return (
      <li className={style.footerItem}
        key={linkName + key}>
        <a className={style.footerLink} href="#">
          {linkName}
        </a>
      </li>
    );
  });

  return (
    <footer className={style.footerWrapper}>
      <ul className={style.footerList}>
        {linksTemplate}
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.array.isRequired,
}

Footer.defaultProps = {
  links: ['No links'],
}