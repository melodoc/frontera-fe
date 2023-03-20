import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';

import { store } from './__data__/store';
import { Dashboard } from './containers/dashboard';

import './app.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback="">
        <BrowserRouter basename="/">
          <HelmetProvider>
            <Dashboard />
          </HelmetProvider>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};
