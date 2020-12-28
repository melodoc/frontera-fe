import React from 'react';

import style from './style.css';

interface CourseCardsProps {
    readonly cards: Array<{label: string, imageSrc: string}>
    readonly showNumber?: boolean;
    readonly height?: number;
    readonly width?: number;
}

type CourseCardsType = React.FunctionComponent<CourseCardsProps>;

const CourseCards: CourseCardsType = ({cards, height, width, showNumber}: CourseCardsProps) => {
    const cardsTemplate = cards.map((card, i) => {
        return (
            <div className={style.cardContainer}>
                {
                    showNumber && <div className={style.index}>{i}</div>
                }
                <img src="../../assets/icons/logo.svg" width="235" height="43" />
                <div style={{height: `${height}px`, width: `${width}px` }} className={style.catalogItem}>
                    <a className={style.catalogLink} href="#">
                        <div className={style.catalogHeader}>
                        <span className={style.catalogCategory}>
                            {card.label}</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    });

    return (
        <div className={style.catalogList}>
            {cardsTemplate}
        </div>
    );
};

CourseCards.defaultProps = {
    height: 175,
    width: 225,
    showNumber: false
};

export default CourseCards;
