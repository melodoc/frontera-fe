import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components/header/header';
import { Head } from '../../components/head/head';
import { PageHeader } from '../../components/page-header';
import { Loader } from '../../components/loader/loader';
import { CourseCards } from '../../components/course-cards/course-cards';
import { getSuggestions } from '../../__data__/action/suggestions';
import { useAppSelector } from '../../__data__/store/hooks';
import style from './catalog-courses.module.scss';

export const CatalogCourses = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading, courseList } = useAppSelector((state) => ({
    isLoading: state.suggestions.loading,
    courseList: state.suggestions.courseList,
  }));

  useEffect(() => {
    if (!isLoading) {
      dispatch(getSuggestions());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseList]);

  return (
    <>
      <Head title="Catalog of courses" isLoading={isLoading} />
      <Header showSearch />
      <main className={style.Container}>
        <PageHeader label={t('catalog.courses.title')} />
        <section>
          {isLoading ? (
            <Loader />
          ) : (
            courseList && <CourseCards showNumber={false} cards={courseList} />
          )}
        </section>
      </main>
    </>
  );
};
