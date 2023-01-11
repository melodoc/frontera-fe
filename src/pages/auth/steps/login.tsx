import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Box, FormControlLabel, Checkbox, TextField } from '@mui/material';

import { UIButton } from 'shared/components/ui-button/ui-button';
import { User } from 'interfaces/interfaces';

import { URLs } from '../../../__data__/urls';
import { getLogin } from '../../../__data__/action/login';
import { useAppSelector } from '../../../__data__/store/hooks';
import style from './auth.module.scss';

export const Login = ({ moveNextStep }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { token } = useAppSelector((state) => ({
    token: state.login.token
  }));

  const handleSetLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getLogin({ login, password } as User));
  };

  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push(URLs.home.url);
    }
  }, [token, history]);

  const handleClick = (event) => {
    event.preventDefault();
    moveNextStep();
  };

  return (
    <Container component="section" maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 8
        }}
      >
        <TextField
          onChange={handleSetLogin}
          label={t('auth.login.form.username.label')}
          id="username"
          name="username"
          variant="outlined"
          autoComplete="false"
          color="primary"
          type="text"
          autoFocus
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={handleSetPassword}
          label={t('auth.login.form.password.label')}
          id="password"
          name="password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={t('auth.login.remember')}
          sx={{ alignSelf: 'start', mb: 3 }}
        />
        <div className={style.button__container}>
          <UIButton onClick={handleSubmit} size="large" wide>
            {t('auth.login.button')}
          </UIButton>
          <UIButton onClick={handleClick} size="large" wide>
            {t('auth.login.registration')}
          </UIButton>
        </div>
      </Box>
    </Container>
  );
};
