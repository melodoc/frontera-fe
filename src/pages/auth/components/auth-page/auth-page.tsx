import { ErrorBoundary } from "../../../../components/error-boundary/error-boundary";
import HeaderForm from "../../../../components/header-form";
import { TitleWithSubtitle } from "../../../../components/title-with-subtitle/title-with-subtitle";
import style from "./auth-page.module.scss";

export const AuthPage = ({ children, title, descriptions }) => {
  return (
    <ErrorBoundary>
      <HeaderForm />
      <main className={style.container}>
        <section className={style.form}>
          <TitleWithSubtitle title={title} descriptions={descriptions} />
          {children}
        </section>
      </main>
    </ErrorBoundary>
  );
};
