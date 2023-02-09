import i18next from 'i18next';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';
import { URLs } from '../__data__/urls';
import { Auth } from '../pages/auth/auth';
import { Personalization } from '../pages/personalization/personalization';
import { DetailCourse } from '../pages/detail-course/detail-course';
import { HomePage } from './homepage';
import { CatalogCourses } from '../pages/catalog-courses/catalog-courses';

export const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={URLs.auth.url} />
      </Route>
      <Route path={URLs.auth.url}>
        <Auth />
      </Route>
      <ProtectedRoute path={URLs.personalization.url}>
        <Personalization />
      </ProtectedRoute>
      <ProtectedRoute path={URLs.catalogCourses.url}>
        <CatalogCourses />
      </ProtectedRoute>
      <ProtectedRoute path={URLs.home.url}>
        <HomePage />
      </ProtectedRoute>
      <ProtectedRoute path={`${URLs.coursePage.url}/:id`}>
        {(props) => <DetailCourse courseId={props.match?.params.id} />}
      </ProtectedRoute>
      {/* TODO: Add notFound screen */}
      <Route path="*">
        <h1>{i18next.t('js.navigation.notFound')}</h1>
      </Route>
    </Switch>
  );
};
