/* eslint-disable react/sort-comp */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";

import { URLs } from "../../__data__/urls";
import { SmartImage } from "./smart-image";
import style from "./course-cards.module.scss";

interface CourseCardsProps {
  readonly cards: Array<{ label: string; imageSrc: string }>;
  readonly showNumber?: boolean;
}
interface CourseCardsState {
  imgSrc: string;
}

// TODO: Fix classes issues

export class CourseCards extends React.Component<
  CourseCardsProps,
  CourseCardsState
> {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      imgSrc: "",
    };
  }

  static renderCatalogLink(card: any) {
    return (
      <a className={style.CatalogLink} href="">
        {this.renderHeader(card)}
      </a>
    );
  }

  static renderHeader(card) {
    return (
      <h3 className={style.CatalogHeader}>
        <span className={style.CatalogCategory}>{card.label}</span>
      </h3>
    );
  }

  static renderItemCard(card) {
    return (
      <div className={style.CatalogItem}>
        <SmartImage path={card.imageSrc} />
        {this.renderCatalogLink(card)}
      </div>
    );
  }

  render() {
    return (
      <ul className={style.CatalogList}>
        {this.props.cards.map((card, i) => (
          <li className={style.CardContainer} key={card.label + i}>
            {this.props.showNumber && (
              <span className={style.Index}>{i + 1}</span>
            )}
            {CourseCards.renderItemCard(card)}
          </li>
        ))}
      </ul>
    );
  }
}

export class CourseCardsLarge extends CourseCards {
  static renderHeader(card) {
    return (
      <h3 className={style.CatalogHeaderLong}>
        <span className={style.CatalogCategoryLong}>{card.label}</span>
      </h3>
    );
  }

  static renderCatalogLink(card) {
    return (
      <Link
        className={style.CatalogLinkLong}
        to={`${URLs.coursepage.url}/${card.id}`}
      >
        {this.renderHeader(card)}
      </Link>
    );
  }

  static renderItemCard(card) {
    return (
      <div className={style.CatalogItemLong}>
        <SmartImage path={card.imageSrc} />
        {this.renderCatalogLink(card)}
      </div>
    );
  }
}
