import { useHistory } from 'react-router-dom';

import { dropToken, getToken } from 'services/token';
import { URLs } from '__data__/urls';

export const useAuthManager = () => {
  const history = useHistory();

  const logout = () => {
    history.push(URLs.auth.url);
    dropToken();
  };

  const checkValidity = (
    locationPathname = URLs.home.url,
    onSuccessHandle?: () => void,
    onErrorHandler?: () => void
  ) => {
    const token = getToken();
    if (token) {
      history.push(locationPathname);
      onSuccessHandle && onSuccessHandle();
      // TODO: Replace when authorization mechanism is added
      // dispatch(checkValidity(token));
      // TODO: Add request
      // setUserInformation();
    } else {
      logout();
      onErrorHandler && onErrorHandler();
    }
  };

  return {
    logout,
    checkValidity
  };
};
