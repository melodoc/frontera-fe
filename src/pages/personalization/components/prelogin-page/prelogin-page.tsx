import { useTranslation } from "react-i18next";

import { ErrorBoundary } from "../../../../components/error-boundary/error-boundary";
import { IconLogo } from "../../../../components/icon-logo/icon-logo";
import { Footer } from "../../../../components/footer/footer";
import { TitleWithSubtitle } from "../../../../components/title-with-subtitle/title-with-subtitle";
import style from "./prelogin-page.module.scss";

export const Page = ({ children, title, descriptions }) => {
  const { t } = useTranslation();
  return (
    <ErrorBoundary>
      <header className={style.Header}>
        <nav className={style.Nav}>
          <div className={style.IconNav}>
            <IconLogo />
          </div>
          <a className={style.LogOutLink} href="">
            {t("personalizations.common.log.out")}
          </a>
        </nav>
      </header>
      <div className={style.Wrapper}>
        <main className={style.Container}>
          <section className={style.login}>
            <TitleWithSubtitle title={title} descriptions={descriptions} />
          </section>
          {children}
        </main>
      </div>
      <Footer
        links={["Главная", "Конфиденциальность", "Условия", "Настройки"]}
      />
    </ErrorBoundary>
  );
};
