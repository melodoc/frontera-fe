import { IconLogo } from "../icon-logo/icon-logo";
import style from "./header-form.module.scss";

export function HeaderFrom() {
  return (
    <header>
      <nav className={style.headerNav}>
        <IconLogo />
      </nav>
    </header>
  );
}
