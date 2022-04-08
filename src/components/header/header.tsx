import { IconLogo } from "../icon-logo/icon-logo";
import { HeaderNav } from "../header-nav/header-nav";
import { AccountBar } from "../account-bar/account-bar";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <nav className={style.headerNav}>
          <IconLogo />
          <HeaderNav />
        </nav>
        <AccountBar />
      </header>
    </div>
  );
};
