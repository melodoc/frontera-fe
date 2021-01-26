import React from 'react';

import style from './style.css';

import getValues from '../../handlers/getValues';

const loaderAttributes = [
  {
    key: "personalizing",
    value: {
      pageTitle: "Personalizing themes",
      anthem: "Personalizing for you",
      heading: "We are looking for courses we think you will love",
    },
  },
];

interface LoaderProps {
  readonly type: string;
}

export const Loader: React.FC<LoaderProps> = ({ type }) => {
  const loaderValue = getValues(loaderAttributes, type);
  return (
    <React.Fragment>
      <h1 className={style.visuallyHidden}>{loaderValue.pageTitle}</h1>
      <div className={style.anthem}>
        <p className={style.anthemItem}>{loaderValue.anthem}</p>
      </div>
      <div className={style.spinner}>
        <div className={style.bounce1}></div>
        <div className={style.bounce2}></div>
        <div className={style.bounce3}></div>
      </div>
      <div className={style.anthem}>
        <p className={style.loginHeading}>{loaderValue.heading}</p>
      </div>
    </React.Fragment>
  );
};
