import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button {border: 0; outline: 0 }
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    overscroll-behavior: none;
    width: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`