import { URLs } from "__data__/urls";
import { UITypography } from "components/ui-typography/ui-typography";

import { UIIconInput } from "../ui-icon-input/ui-icon-input";
import { UIButton } from "../ui-button/ui-button";
import logo from "../../assets/icons/logo.svg";
import style from "./header.module.scss";

interface HeaderProps {
  isLoggedIn?: boolean;
  showSearch?: boolean;
}

export const Header = ({ isLoggedIn, showSearch }: HeaderProps) => {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <a className={style.header__link} href={URLs.home.url}>
          <img className={style.header__link_img} src={logo} alt="Frontera" />
        </a>
        {showSearch && (
          <form>
            <UIIconInput
              label="Поиск"
              type="text"
              buttonType="submit"
              icon="search"
            />
          </form>
        )}
      </nav>
      <div className={style.header__account}>
        <UITypography
          variant="caption"
          typographyStyle={{
            fontWeight: "bold",
            uppercase: true,
            color: "secondary",
          }}
        >
          Курсы
        </UITypography>
        <UITypography
          variant="caption"
          typographyStyle={{
            fontWeight: "bold",
            uppercase: true,
            color: "secondary",
          }}
        >
          en
        </UITypography>
        {isLoggedIn ? (
          <>
            <UIButton onClick={() => {}} theme="secondary" size="small">
              Мои курсы
            </UIButton>
            <UIButton onClick={() => {}} theme="secondary" size="small">
              Выйти
            </UIButton>
          </>
        ) : (
          <>
            <UIButton onClick={() => {}} theme="secondary" size="small">
              Войти
            </UIButton>
            <UIButton onClick={() => {}} theme="secondary" size="small">
              Регистрация
            </UIButton>
          </>
        )}
      </div>
    </header>
  );
};
