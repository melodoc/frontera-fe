import React from 'react';
import { Link } from 'react-router-dom'; 
import { URLs } from 'src/__data__/urls';
import { SmartImage } from './smart-image';
import style from './style.css';

interface CourseCardsProps {
    readonly cards: Array<{ label: string, imageSrc: string }>
    readonly showNumber?: boolean;
}
interface CourseCardsState {
    imgSrc: string;
}

export class CourseCards extends React.Component<CourseCardsProps, CourseCardsState>{
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: '',
        };
    }

    renderCatalogLink = (card) => {
        return (
            <a className={style.catalogLink} href="#">
                {this.renderHeader(card)}
            </a>
        );
    };
    renderHeader = (card) => {
        return (
            <h3 className={style.catalogHeader}>
                <span className={style.catalogCategory}>{card.label}</span>
            </h3>
        )
    };
    renderItemCard = (card) => {
        return (
            <div className={style.catalogItem}>
                <SmartImage path={card.imageSrc} />
                {this.renderCatalogLink(card)}
            </div>);
    };
    render() {
        return (
            <ul className={style.catalogList}>
                {this.props.cards.map((card, i) => {
                    return (
                        <li className={style.cardContainer}
                            key={card.label + i}>
                            {
                                this.props.showNumber && <span className={style.index}>{i + 1}</span>
                            }
                            {
                                this.renderItemCard(card)
                            }
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export class CourseCardsLarge extends CourseCards {

    renderHeader = (card) => {
        return (
            <h3 className={style.catalogHeaderLong}>
                <span className={style.catalogCategoryLong}>{card.label}</span>
            </h3>
        )
    };

    renderCatalogLink = (card) => {
        return (
            <Link className={style.catalogLinkLong} to={`${URLs.coursepage.url}/${card.id}`}>
                {this.renderHeader(card)}
            </Link>
        );
    };

    renderItemCard = (card) => {
        return (
            <div className={style.catalogItemLong}>
                <SmartImage path={card.imageSrc} />
                {this.renderCatalogLink(card)}
            </div>);
    };
}
