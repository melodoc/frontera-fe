import { URLs } from '__data__/urls';
import { UIIconButton } from 'shared/components/ui-icon-button/ui-icon-button';
import { UITypography } from 'shared/components/ui-typography/ui-typography';

import logo from '../../assets/icons/logo.svg';
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
          <a className={style.header__link} href={URLs.home.url}>
            <img className={style.header__link_img} src={logo} alt="Frontera" />
          </a>
          <a className={style.header__link} href={URLs.home.url}>
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
          </a>
          <a className={style.header__link} href={URLs.home.url}>
            <UITypography
              variant="span"
              typographyStyle={{
                fontWeight: 'bold',
                color: 'secondary'
              }}
            >
              Вебинары
            </UITypography>
          </a>
          <a className={style.header__link} href={URLs.home.url}>
            <UITypography
              variant="span"
              typographyStyle={{
                fontWeight: 'bold',
                color: 'secondary'
              }}
            >
              Скрининг хард-скиллов
            </UITypography>
          </a>
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
          {isLoggedIn ? (
            <UIIconButton onClick={() => {}} icon="user" label="Выйти" buttonType="button" />
          ) : (
            <UIIconButton onClick={() => {}} icon="user" label="Войти" buttonType="button" />
          )}
        </div>
      </header>
    </div>
  );
};
