import React from 'react';

import style from './style.css';

interface CourseCardsProps {
    readonly cards: Array<{label: string, imageSrc: string}>
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

    componentDidMount() {
        const imgUrl = `${__webpack_public_path__}/static/images/suggestions/bg-widget-m-5.png`;
        this.setState({imgSrc: imgUrl});
    }

    handleError = () => {
        const defaultImageUrl = `${__webpack_public_path__}/static/images/suggestions/bg-widget-m-1.png`;
        this.setState({imgSrc: defaultImageUrl});
    };

    renderImg = () => {
        return (<img onError={this.handleError} src={this.state.imgSrc}/>);
    };

    renderCatalogLink = (card) => {
        return (
            <a className={style.catalogLink} href="#">
                {this.renderHeader(card)}
            </a>
        );
    };
    renderHeader = (card) => {
        return (
            <div className={style.catalogHeader}>
                <span className={style.catalogCategory}>{card.label}</span>
            </div>
        )
    };
    renderItemCard = (card) => {
        return (
            <div className={style.catalogItem}>
                {this.renderImg()}
                {this.renderCatalogLink(card)}
            </div>);
    };
    render() {
        return (
            <div className={style.catalogList}>
                {this.props.cards.map((card, i) => {
                    return (
                        <div className={style.cardContainer}>
                            {
                                this.props.showNumber && <div className={style.index}>{i + 1}</div>
                            }
                            {
                                this.renderItemCard(card)
                            }
                        </div>
                    );
                })}
            </div>
        );
    }
}

export class CourseCardsLarge extends CourseCards {

    renderHeader = (card) => {
        return (
            <div className={style.catalogHeaderLong}>
                <span className={style.catalogCategoryLong}>{card.label}</span>
            </div>
        )
    };

    renderCatalogLink = (card) => {
        return (
            <a className={style.catalogLinkLong} href="#">
                {this.renderHeader(card)}
            </a>
        );
    };
    renderItemCard = (card) => {
        return (
            <div className={style.catalogItemLong}>
                {this.renderImg()}
                {this.renderCatalogLink(card)}
            </div>);
    };
}
