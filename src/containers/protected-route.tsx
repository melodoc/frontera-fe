import { FC } from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { useAppSelector } from '__data__/store/hooks';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  // TODO: Заменить, когда добавится механизм авторизации
  const { token } = useAppSelector((state) => state.login);
  const location = useLocation();
  if (!token) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: '/auth', state: { from: location } }} />
      </Route>
    );
  }
  return <Route {...rest}>{children}</Route>;
};
