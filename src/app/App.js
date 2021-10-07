import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import List from './pages/List'
import theme from '../themes'
import GlobalStyles from './globalStyles'
import { cardContext, bigCardStatus } from './context'

const App = () => {
  const [activCard, setActivCard] = useState(``)
  const [bcStatus, setBcStatus] = useState(``)

  return (
    <cardContext.Provider value={{ activCard, setActivCard }}>
      <bigCardStatus.Provider value={{ bcStatus, setBcStatus }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <List />
        </ThemeProvider>
      </bigCardStatus.Provider>
    </cardContext.Provider>
  )
}

export default App
