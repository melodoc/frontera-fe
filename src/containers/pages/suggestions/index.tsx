import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getSuggestion from '../../../__data__/action/suggestions';
import Header from '../../../components/header';
import { PageHeader } from '../../../components/page-header';
import { CourseCardsLarge } from '../../../components/course-cards/course-cards';

import style from '../style.css';


const Suggestions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestion());
  }, []);

  const { isLoading } = useSelector((state: any) => ({ isLoading: state.suggestions.loading }));
  const { courseList } = useSelector((state: any) => ({ courseList: state.suggestions.courseList }));
  const { errors } = useSelector((state: any) => ({ errors: state.suggestions.errors }));


  return (
    <React.Fragment>
      <Header />
      <main className={style.container}>
          <PageHeader label={'Based on your choise'} />
          <section className={style.gallery}>
            {isLoading ? <span> Loading... </span>
              : courseList && <CourseCardsLarge showNumber={false} cards={courseList} />}
            {errors && <span>{errors.find((error) => error.field === 'suggestions').text}</span>}
          </section>
      </main>
    </React.Fragment>
  );
};

export default Suggestions;
