import { IconLogo } from "../icon-logo/icon-logo";
import { HeaderNav } from "../header-nav/header-nav";
import { AccountBar } from "../account-bar/account-bar";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <div className={style.HeaderWrapper}>
      <header className={style.Header}>
        <nav className={style.HeaderNav}>
          <IconLogo />
          <HeaderNav />
        </nav>
        <AccountBar />
      </header>
    </div>
  );
};
