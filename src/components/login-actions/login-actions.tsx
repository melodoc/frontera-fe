import React from 'react';
import { useTranslation } from 'react-i18next';

import { LinkReset } from '../link';
import { URLs } from '../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import Checkbox from '../checkbox';

import style from './style.css';

export const LoginActions = () => {
  const { t } = useTranslation();

  return (
    <div className={style.formActions}>
    <Checkbox label={t('auth.login.remember')}/>
    <LinkReset
      to={URLs.auth.url}
      as={ConnectedLink}
      >
      {t('auth.login.forgot')}
      </LinkReset>
  </div>
);
}
