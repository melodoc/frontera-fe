import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { getToken } from 'services/token';
import { URLs } from '__data__/urls';

export const ProtectedRoute: FC<RouteProps> = ({ children, path, ...rest }) => {
  // TODO: Replace when authorization mechanism is added
  const token = getToken();
  if (!token) {
    return (
      <Route {...rest}>
        <Redirect to={URLs.auth.url} />
      </Route>
    );
  }
  return <Route {...rest}>{children}</Route>;
};
