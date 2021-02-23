import React, { useState } from 'react';
import style from './style.css';

const defaultImageUrl = `${__webpack_public_path__}remote-assets/images/suggestions/bg-widget-m-1.png`;

export const SmartImage = ({ path }) => {
    const [imgSrc, setImgSrc] = useState(`${__webpack_public_path__}${path}`);
    const handleError = () => {
        setImgSrc(defaultImageUrl);
    }
    return (<img className={ style.cardImage } onError={handleError} src={imgSrc} />);
}


