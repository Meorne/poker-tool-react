import { createGlobalStyle } from 'styled-components'
import '@fontsource/raleway/700.css'
import theboldfontWoff2 from '../assets/font/theboldfont-webfont.woff2'
import theboldfontWoff from '../assets/font/theboldfont-webfont.woff'

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'theboldfont';
    src: url(${theboldfontWoff2}) format('woff2'),
         url(${theboldfontWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
}

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
