import i18next from 'i18next';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuthManager } from 'hooks/use-auth-manager';

import { ProtectedRoute } from './protected-route';
import { URLs } from '../__data__/urls';
import { Auth } from '../pages/auth/auth';
import { Personalization } from '../pages/personalization/personalization';
import { DetailCourse } from '../pages/detail-course/detail-course';
import { HomePage } from './homepage';
import { CatalogCourses } from '../pages/catalog-courses/catalog-courses';

export const Dashboard = () => {
  const { checkValidity, isTokenValid } = useAuthManager();
  const location = useLocation();

  const renderRedirect = (url: string, tokenValidity: boolean) => {
    return tokenValidity ? <Redirect to={url} /> : <Auth />;
  };

  useEffect(() => {
    checkValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.pathname]);

  return (
    <Switch>
      <Route exact path={URLs.root.url}>
        {renderRedirect(URLs.home.url, isTokenValid)}
      </Route>
      <Route path={URLs.auth.url}>{renderRedirect(URLs.home.url, isTokenValid)}</Route>
      <ProtectedRoute path={URLs.personalization.url} isTokenValid={isTokenValid}>
        <Personalization />
      </ProtectedRoute>
      <ProtectedRoute path={URLs.catalogCourses.url} isTokenValid={isTokenValid}>
        <CatalogCourses />
      </ProtectedRoute>
      <ProtectedRoute path={URLs.home.url} isTokenValid={isTokenValid}>
        <HomePage />
      </ProtectedRoute>
      <ProtectedRoute path={`${URLs.coursePage.url}/:id`} isTokenValid={isTokenValid}>
        {(props) => <DetailCourse courseId={props.match?.params.id} />}
      </ProtectedRoute>
      {/* TODO: Add notFound screen */}
      <Route path="*">
        <h1>{i18next.t('js.navigation.notFound')}</h1>
      </Route>
    </Switch>
  );
};
