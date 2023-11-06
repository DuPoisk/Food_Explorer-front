import React from 'react'
import ReactDOM from 'react-dom/client' // para manipular os elementos que fazem parte da página
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from "./styles/theme.js"

import { UserHomeDesktop}  from './pages/UserHomeDesktop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < GlobalStyles />
      <UserHomeDesktop/>
    </ThemeProvider>
  </React.StrictMode>,
)
