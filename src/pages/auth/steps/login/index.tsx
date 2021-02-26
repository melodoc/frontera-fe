import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'

import { URLs } from '../../../../__data__/urls';

import Button from '../../../../components/button'
import Input from '../../../../components/input';

import style from './style.css';

const Login = ({ moveNextStep }) => {
    const history = useHistory();
    const { t } = useTranslation();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(URLs.home.url);
    }

    const handleClick = (event) => {
        event.preventDefault();
        moveNextStep();
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input label={t('auth.login.form.email.label')} id="userEmail" name="email" type="email" placeholder="email@example.com" />
                    <Input label={t('auth.login.form.password.label')} id="password" name="password" type="password" placeholder="••••••" />
                </div>
                <div className={style.buttons}>
                    <Button onClick={handleSubmit}>
                        {t('auth.login.button')}
                    </Button>
                </div>
            </form>
            <div className={style.buttons}>
                <Button onClick={handleClick}>
                    {t('auth.login.registration')}
                </Button>
            </div>
        </React.Fragment>
    );
}

export default Login;