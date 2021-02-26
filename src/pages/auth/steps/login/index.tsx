import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import { URLs } from '../../../../__data__/urls';
import { getLogin } from '../../../../__data__/action/login';
import { reset } from '../../../../__data__/slice/login';

import Button from '../../../../components/button'
import Input from '../../../../components/input';

import style from './style.css';

const Login = ({ moveNextStep }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const token = useSelector((state: any) => state.login.token);
    const errors = !!useSelector((state: any) => state.login.errors);
    
    const handleChangeLogin = (event) => {
        setLogin(event.target.value);

        if (errors) {
            dispatch(reset());
        }
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);

        if (errors) {
            dispatch(reset());
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getLogin(login, password));

        if (errors) {
            dispatch(reset());
        }
    };

    const history = useHistory();

    if (token) {
        history.push(URLs.home.url);
    }

    const handleClick = (event) => {
        event.preventDefault();
        moveNextStep();
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {errors && <span>Пользователь не найден</span>}
                <div>
                    <Input onChange={handleChangeLogin} label={t('auth.login.form.username.label')} id="username" name="username" type="text" placeholder="Elliot Page" />
                    <Input onChange={handleChangePassword} label={t('auth.login.form.password.label')} id="password" name="password" type="password" placeholder="••••••" />
                </div>
                <div className={style.buttons}>
                    <Button type="submit">
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