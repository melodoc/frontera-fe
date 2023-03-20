import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getToken } from 'services/token';
import { URLs } from '__data__/urls';

export const useAuthManager = () => {
  const history = useHistory();
  const token = getToken();
  const [isTokenValid, setIsTokenValid] = useState(!!token);

  const logout = () => {
    setIsTokenValid(false);
    history.push(URLs.auth.url);
  };

  const checkValidity = (onSuccessHandle?: () => void, onErrorHandler?: () => void) => {
    if (!token) {
      logout();
      onErrorHandler && onErrorHandler();
    } else {
      setIsTokenValid(true);
      // TODO: Replace when authorization mechanism is added
      // dispatch(checkValidity(token));
      // TODO: Add request
      // setUserInformation();
      onSuccessHandle && onSuccessHandle();
    }
  };

  return {
    logout,
    checkValidity,
    isTokenValid
  };
};
