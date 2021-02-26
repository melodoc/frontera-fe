import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'

import { URLs } from '../../../../__data__/urls';

import Button from '../../../../components/button'
import Input from '../../../../components/input';
import LoginActions from '../../../../components/login-actions';

import style from './style.css';

const Registration = ({ moveNextStep }) => {
    const { t } = useTranslation();
    const handleClick = (event) => {
        event.preventDefault();
        moveNextStep()
    }

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Зарегестрированы!');
        history.push(URLs.personalizations.url);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input label={t('auth.login.form.username.label')} id="username" name="username" type="text" placeholder="Elliot Page" />
                    <Input label={t('auth.login.form.email.label')} id="userEmail" name="email" type="email" placeholder="email@example.com" />
                    <Input label={t('auth.login.form.password.label')} id="password" name="password" type="password" placeholder="••••••" />
                    <Input label={t('auth.login.form.repeat.password.label')} id="repeatPassword" name="repeatPassword" type="password" placeholder="••••••" />
                </div>
                <div className={style.buttons}>
                    <Button onClick={handleSubmit}>
                        {t('auth.singup.button')}
                    </Button>
                </div>
            </form>
            <div className={style.buttons}>
                <Button onClick={handleClick}>
                    {t('auth.cancel.button')}
                </Button>
            </div>
        </React.Fragment>
    );
}

export default Registration;