import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getSuggestion from '../../../__data__/action/suggestions';
import Header from '../../../components/header';
import PageHeader from '../../../components/page-header';

import style from '../style.css';
import { CourseCardsLarge } from '../../../components/course-cards/course-cards';


const Suggestions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestion());
  }, []);

  const { isLoading } = useSelector((state: any)=> ({isLoading: state.suggestions.loading}));
  const { themes } = useSelector((state: any)=> ({themes: state.suggestions.themes}));
  const { errors } = useSelector((state: any)=> ({errors: state.suggestions.errors}));


  return (
    <div className={style.body}>
      <Header />
      <main className={style.container}>
        <section className={style.login}>
          <PageHeader label={'Based on your choise'} />
          <section className={style.gallery}>
              { isLoading ? <span> Loading... </span>
                  : themes && <CourseCardsLarge showNumber={false} cards={themes}/>}
              {errors && <span>{errors.find((error) => error.field === 'suggestions').text}</span>}
          </section>
        </section>
      </main>
    </div>
  );
};

export default Suggestions;
