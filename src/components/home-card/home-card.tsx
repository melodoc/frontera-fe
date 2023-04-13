import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { UIButton } from '../../shared/components/ui-button/ui-button';
import { URLs } from '../../__data__/urls';
import style from './home-card.module.scss';
import girl from '../../assets/images/girl-and-laptop.jpg';

//   TODO: Добавить английский к тексту
export const HomeCard = () => {
  const { t } = useTranslation();
  const history = useHistory();
  //   TODO add an appropriate path
  const handleClick = () => {
    history.push(`${URLs.home.url}`);
  };

  return (
    <article className={style.row}>
      <section className={style.content}>
        {/* TODO Add UITypography */}
        <h2 className={style.content__title}>{t('home.start-card.title')}</h2>
        <p className={style.content__text}>{t('home.start-card.text')}</p>
        <UIButton onClick={handleClick} size="large" theme="tertiary">
          {t('home.start-card.textBtn')}
        </UIButton>
      </section>
      <div className={style.row__cardImage}>
        <img src={girl} alt={t('home.start-card.altImg')} />
      </div>
    </article>
  );
};
