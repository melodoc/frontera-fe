import React from 'react';

import ErrorBoundary from '../../../../components/error-boundary';

import HeaderForm from '../../../../components/header-form';
import TitleWithSubtitle from "../title-with-subtitle";

import style from './style.css';

const AuthPage = ({ children, title, descriptions }) => {
    return (
        <ErrorBoundary>
            <HeaderForm />
            <main className={style.container}>
                <section className={style.form}>
                    <TitleWithSubtitle title={title} descriptions={descriptions} />
                    {children}  
                </section>
            </main>
        </ErrorBoundary >
    );
}

export default AuthPage;
