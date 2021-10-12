import { createGlobalStyle } from 'styled-components'
import '@fontsource/raleway/700.css'

const GlobalStyles = createGlobalStyle`

html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #efeff0;
  overflow: hidden;
}
`

export default GlobalStyles
