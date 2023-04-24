import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';

import { theme } from 'common/theme';

import { App } from './app';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
