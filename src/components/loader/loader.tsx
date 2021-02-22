import React from 'react';

import style from './style.css';

export const Loader = () => {
  return (
    <React.Fragment>
      <div className={style.spinner}>
        <div className={style.bounce1}/>
        <div className={style.bounce2}/>
        <div className={style.bounce3}/>
      </div>
    </React.Fragment>
  );
};
