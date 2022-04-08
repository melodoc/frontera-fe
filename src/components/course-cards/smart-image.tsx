import React, { useState } from "react";

import style from "./course-cards.module.scss";

const defaultImageUrl = "remote-assets/images/suggestions/bg-widget-m-1.jpg";

export const SmartImage = ({ path }) => {
  const [imgSrc, setImgSrc] = useState(defaultImageUrl);
  const handleError = () => {
    setImgSrc(defaultImageUrl);
  };
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img className={style.cardImage} onError={handleError} src={imgSrc} />;
};
