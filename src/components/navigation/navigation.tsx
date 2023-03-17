import i18next from 'i18next';
import { Link } from 'react-router-dom';

import { URLs } from '__data__/urls';
import { UITypography } from 'shared/components/ui-typography/ui-typography';
import { Logo } from 'components/logo/logo';

import style from './navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <Link className={style.navigation__link} to={URLs.home.url}>
        <Logo />
      </Link>
      <Link className={style.navigation__link} to={URLs.catalogCourses.url}>
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
      <Link className={style.navigation__link} to={URLs.home.url}>
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
      <Link className={style.navigation__link} to={URLs.catalogCourses.url}>
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
  );
};
