import i18next from 'i18next';
import { Link } from 'react-router-dom';

import { URLs } from '__data__/urls';
import { UIIconButton } from 'shared/components/ui-icon-button/ui-icon-button';
import { UITypography } from 'shared/components/ui-typography/ui-typography';
import { Logo } from 'components/logo/logo';

import style from './header.module.scss';

interface HeaderProps {
  isLoggedIn?: boolean;
  showSearch?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Header = ({ isLoggedIn, showSearch }: HeaderProps) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <nav className={style.header__nav}>
          <Link className={style.header__link} to={URLs.home.url}>
            <Logo />
          </Link>
          <Link className={style.header__link} to={URLs.catalogCourses.url}>
            <UITypography
              variant="span"
              iconStyle={{
                icon: 'storage'
              }}
              typographyStyle={{
                fontWeight: 'bold',
                color: 'secondary'
              }}
            >
              Все курсы
            </UITypography>
          </Link>
          <Link className={style.header__link} to={URLs.home.url}>
            <UITypography
              variant="span"
              typographyStyle={{
                fontWeight: 'bold',
                color: 'secondary'
              }}
            >
              Вебинары
            </UITypography>
          </Link>
          <Link className={style.header__link} to={URLs.personalization.url}>
            <UITypography
              variant="span"
              typographyStyle={{
                fontWeight: 'bold',
                color: 'secondary'
              }}
            >
              {i18next.t('js.navigation.suggestion')}
            </UITypography>
          </Link>
        </nav>
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
          {!isLoggedIn ? (
            <Link to={URLs.auth.url}>
              <UITypography
                variant="label"
                iconStyle={{ icon: 'user' }}
                typographyStyle={{
                  fontWeight: 'bold',
                  color: 'secondary'
                }}
                title="Выйти"
              >
                Выйти
              </UITypography>
            </Link>
          ) : (
            <UIIconButton onClick={() => {}} icon="user" label="Войти" buttonType="button" />
          )}
        </div>
      </header>
    </div>
  );
};
