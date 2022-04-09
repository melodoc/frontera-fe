import { IconLogo } from "../icon-logo/icon-logo";
import style from "./header-form.module.scss";

export const HeaderForm = () => {
  return (
    <header>
      <nav className={style.HeaderNav}>
        <IconLogo />
      </nav>
    </header>
  );
};
