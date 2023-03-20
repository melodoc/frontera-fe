import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuthManager } from 'hooks/use-auth-manager';
import { getToken } from 'services/token';
import { UIIconButton } from 'shared/components/ui-icon-button/ui-icon-button';
import { UITypography } from 'shared/components/ui-typography/ui-typography';
import { URLs } from '__data__/urls';
import { reset } from '__data__/slice/login';

import { Navigation } from '../navigation/navigation';
import style from './header.module.scss';

export const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { logout } = useAuthManager();
  const isLoggedIn = getToken();

  const onLogOutClick = () => {
    dispatch(reset());
    logout();
  };

  const onLogInClick = () => {
    history.push(URLs.auth.url);
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Navigation />
        <div className={style.header__account}>
          <UITypography
            variant="span"
            iconStyle={{
              icon: 'chevronDown'
            }}
            typographyStyle={{
              fontWeight: 'bold',
              uppercase: true,
              color: 'secondary'
            }}
          >
            en
          </UITypography>
          <UITypography
            variant="span"
            typographyStyle={{
              fontWeight: 'bold',
              uppercase: true,
              color: 'secondary'
            }}
          >
            8 800 000-00-00
          </UITypography>
          {isLoggedIn ? (
            <UIIconButton onClick={onLogOutClick} icon="user" label="Выйти" buttonType="button" />
          ) : (
            <UIIconButton onClick={onLogInClick} icon="user" label="Войти" buttonType="button" />
          )}
        </div>
      </header>
    </div>
  );
};
