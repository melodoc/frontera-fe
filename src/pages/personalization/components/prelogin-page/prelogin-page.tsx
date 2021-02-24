import React from 'react';
import { useTranslation } from 'react-i18next';

import ErrorBoundary from '../../../../components/error-boundary';

import IconLogo from "../../../../components/icon-logo";
import Footer from "../../../../components/footer";
import TitleWithSubtitle from "../title-with-subtitle";

import style from './style.css';

const Page = ({ children, title, descriptions }) => {
    const { t } = useTranslation();
    return (
        <ErrorBoundary>
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className={style.iconNav}>
                        <IconLogo />
                    </div>
                    <a className={style.logOutLink} href="#">{t('personalizations.common.log.out')}</a>
                </nav>
            </header>
            <div className={style.wrapper}>
                <main className={style.container}>
                    <section className={style.login}>
                        <TitleWithSubtitle title={title} descriptions={descriptions} />
                    </section>
                    {children}
                </main>
            </div>
            <Footer links={['Главная', 'Конфиденциальность', 'Условия', 'Настройки']} />
        </ErrorBoundary>
    );
}

export default Page;
