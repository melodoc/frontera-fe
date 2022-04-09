import { useState } from "react";

import style from "./smart-image.module.scss";

export const SmartImage = ({ path }) => {
  const defaultImageUrl = "assets/images/code.jpg";

  const [imgSrc, setImgSrc] = useState(path);

  const handleError = () => {
    setImgSrc(defaultImageUrl);
  };

  return (
    <img
      className={style.CardImage}
      onError={handleError}
      src={imgSrc}
      // TODO: Add translation
      alt="background"
    />
  );
};
