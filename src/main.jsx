import React from 'react'
import ReactDOM from 'react-dom/client' // para manipular os elementos que fazem parte da página
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from "./styles/theme.js"

import {UserHomeMobile}  from './pages/UserHomeMobile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < GlobalStyles />
      <UserHomeMobile/>
    </ThemeProvider>
  </React.StrictMode>,
)
