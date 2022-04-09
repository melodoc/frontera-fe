import { purpleLogo } from "../../assets/index";
import style from "./icon-logo.module.scss";

export const IconLogo = () => {
  return (
    <a className={style.NavLogo} href="">
      {purpleLogo}
    </a>
  );
}
