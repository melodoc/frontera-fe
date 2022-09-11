import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { store } from './__data__/store';
import { Dashboard } from './containers/dashboard';

import './app.css';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
      <HelmetProvider>
        <Dashboard />
      </HelmetProvider>
      </BrowserRouter>
    </Provider>
  );
};
