import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { PageHeader } from '../page-header';
import { CourseCards } from '../course-cards/course-cards';
import style from './trending.module.scss';
import { getCourses } from '../../__data__/action/trending';
import { Loader } from '../loader/loader';
import { useAppSelector } from '../../__data__/store/hooks';

export const Trending = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, themes } = useAppSelector((state) => ({
    isLoading: state.trending.loading,
    themes: state.trending.themes
  }));

  return (
    <div className={style.Wrapper}>
      <PageHeader label={t('home.trends.title')} />
      {isLoading ? <Loader /> : themes && <CourseCards showNumber cards={themes} />}
    </div>
  );
};
