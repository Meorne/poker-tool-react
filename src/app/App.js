import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Helmet } from "react-helmet"
import icon196 from '../assets/icons/icon-196.png'
import icon512 from '../assets/icons/icon-512.png'
import List from './pages/List'
import GlobalStyles from './globalStyles'
import { cardContext, bigCardStatus, theme } from './context'

const App = () => {
  const [activCard, setActivCard] = useState(``)
  const [bcStatus, setBcStatus] = useState(``)

  return (
    <cardContext.Provider value={{ activCard, setActivCard }}>
      <bigCardStatus.Provider value={{ bcStatus, setBcStatus }}>
        <Helmet>
          <link rel="icon" type="image/png" href={icon196} />
          <link rel="apple-touch-icon" href={icon512} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <List />
        </ThemeProvider>
      </bigCardStatus.Provider>
    </cardContext.Provider>
  )
}

export default App
