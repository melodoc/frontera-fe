import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';

import { theme } from 'common/theme';

import { i18n } from './common/i18n';
import { App } from './app';

ReactDOM.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
  document.getElementById('root')
);
