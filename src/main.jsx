/*
import React from 'react';
import ReactDOM from 'react-dom/client'; // para manipular os elementos que fazem parte da página
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme.js";
import GlobalStyles from './styles/global';

import {SignUp}  from './pages/SignUp';
*/


import React from 'react'; // para desenvolver as interfaces
import ReactDOM from 'react-dom/client'; //manipular elementos que fazem parte da página 
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme.js";
import GlobalStyles from "./styles/global";
/*
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./Routes";
*/
import { SignIn } from "./pages/SignIn";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < GlobalStyles />
      <SignIn/>
      {/* <AuthProvider>
          <Routes/>
       </AuthProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
);
