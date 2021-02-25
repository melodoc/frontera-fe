import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ConnectedLink } from 'react-router-dom';

import { URLs } from '../../../../__data__/urls';

import Button from '../../../../components/button'
import { LinkReset } from '../../../../components/link';
import Input from '../../../../components/input';
import LoginActions from '../../../../components/login-actions';

import style from './style.css';

const Login = ({ moveNextStep }) => {
    const { t } = useTranslation();
    const handleSubmit = (event) => {
        event.preventDefault();
        moveNextStep()
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input label={t('auth.login.form.email.label')} id="restoreEmail" name="email" type="email" placeholder="email@example.com" />
                </div>
                <LoginActions />
                <div className={style.buttons}>
                    <Button>
                        {t('auth.recover.button')}
                    </Button>
                </div>
            </form>
            <div className={style.buttons}>
                <LinkReset
                    to={URLs.registration.url}
                    as={ConnectedLink}>
                    {t('auth.cancel.button')}
                </LinkReset>
            </div>
        </React.Fragment>
    );
}

export default Login;