import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { URLs } from '__data__/urls';

interface IProtectedRoute extends RouteProps {
  isTokenValid: boolean;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children, path, ...props }) => {
  if (!props?.isTokenValid) {
    return (
      <Route {...props}>
        <Redirect to={URLs.auth.url} />
      </Route>
    );
  }
  return <Route {...props}>{children}</Route>;
};
