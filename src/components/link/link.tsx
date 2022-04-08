import React from "react";

import style from "./link.module.scss";

type LinkProps = {
  to: string;
  as: any;
};

export type LinkType = React.FC<LinkProps>;

export const Link: LinkType = ({ to, children, as: LinkComponent }) => (
  <LinkComponent className={style.link} to={to}>
    {children}
  </LinkComponent>
);

export const LinkButton: LinkType = ({ to, children, as: LinkComponent }) => (
  <LinkComponent className={style.button} to={to}>
    {children}
  </LinkComponent>
);

export const LinkReset: LinkType = ({ to, children, as: LinkComponent }) => (
  <LinkComponent className={style.linkReset} to={to}>
    {children}
  </LinkComponent>
);

Link.defaultProps = {
  as: "a",
};
