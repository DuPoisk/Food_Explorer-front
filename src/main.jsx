import React from 'react';
import ReactDOM from 'react-dom/client'; // para manipular os elementos que fazem parte da página
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from "./styles/theme.js";

import {UserHome}  from './pages/UserHome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < GlobalStyles />
      <UserHome/>
    </ThemeProvider>
  </React.StrictMode>,
);
