import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

interface NavigationProps {
  readonly links: Array<string>;
}

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const linksTemplate = links.map((linkName, key) => {
    return (
      <li className={style.navAccountItem}
        key={linkName + key}>
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

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
}

Navigation.defaultProps = {
  links: ['No links'],
}