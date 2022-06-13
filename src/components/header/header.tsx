import { Link as ConnectedLink } from "react-router-dom";
import i18next from "i18next";
import { Link, SvgIcon } from "@mui/material";

import { URLs } from "__data__/urls";

import { Link as UILink } from "../link/link";
import { AccountBar } from "../account-bar/account-bar";
import style from "./header.module.scss";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Header = () => {
  return (
    <div className={style.HeaderWrapper}>
      <header className={style.Header}>
        <nav className={style.HeaderNav}>
          <a className={style.NavLogo} href={URLs.home.url}>
            {HomeIcon}
          </a>
          <Link component="a" variant="body2" href={URLs.home.url}>
            {HomeIcon}
          </Link>
          <UILink to={URLs.home.url} as={ConnectedLink}>
            {i18next.t("js.navigation.home")}
          </UILink>
          <UILink to={URLs.catalogCourses.url} as={ConnectedLink}>
            {i18next.t("js.navigation.suggestion")}
          </UILink>
        </nav>
        <AccountBar />
      </header>
    </div>
  );
};
