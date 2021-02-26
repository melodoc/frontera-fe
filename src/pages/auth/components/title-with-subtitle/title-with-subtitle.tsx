import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

export const TitleWithSubtitle = ({ title, descriptions }) => {

  return (
    <React.Fragment>
      <h1 className={style.anthemItem}>{title}</h1>
      <p className={style.loginHeading}>{descriptions}</p>
    </React.Fragment>
  );
};

TitleWithSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired
}