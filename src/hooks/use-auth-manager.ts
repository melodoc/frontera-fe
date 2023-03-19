import { useHistory, useLocation } from 'react-router-dom';

import { dropToken, getToken } from 'services/token';
import { URLs } from '__data__/urls';

import { useRouterHelper } from './use-router-helper';

export const useAuthManager = () => {
  const history = useHistory();
  const location = useLocation();
  const { isRootPath } = useRouterHelper();

  const logout = () => {
    history.push(URLs.auth.url);
    dropToken();
  };

  const getSafePathname = () => {
    const currentPathname = location?.pathname ?? URLs.home.url;
    return isRootPath(currentPathname) ? URLs.home.url : currentPathname;
  };

  const checkValidity = (onSuccessHandle?: () => void, onErrorHandler?: () => void) => {
    const token = getToken();
    if (!token) {
      logout();
      onErrorHandler && onErrorHandler();
    } else {
      history.push(getSafePathname());
      onSuccessHandle && onSuccessHandle();
      // TODO: Replace when authorization mechanism is added
      // dispatch(checkValidity(token));
      // TODO: Add request
      // setUserInformation();
    }
  };

  return {
    logout,
    checkValidity
  };
};
