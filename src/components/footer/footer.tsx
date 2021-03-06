/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Typography, Link } from "@mui/material";

import style from "./footer.module.scss";

interface FooterLinks {
  id: string;
  name: string;
  route: string;
}

interface FooterProps {
  readonly links: Array<FooterLinks>;
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        mr: 6,
      }}
      {...props}
    >
      <Link color="inherit" href="/home" />
      {new Date().getFullYear()}
    </Typography>
  );
}
export const Footer: React.FC<FooterProps> = ({ links }) => {
  const linksTemplate = links.map((link) => (
    <li className={style.FooterItem} key={link.id}>
      <a className={style.FooterLink} href={link.route}>
        {link.name}
      </a>
    </li>
  ));

  return (
    <>
      <footer className={style.FooterWrapper}>
        <ul className={style.FooterList}>{linksTemplate}</ul>
        <Copyright />
      </footer>
    </>
  );
};

Footer.propTypes = {
  links: PropTypes.array.isRequired,
};

Footer.defaultProps = {
  links: [{ id: "rlijn3", name: "Конфиденциальность", route: "/terms" }],
};
