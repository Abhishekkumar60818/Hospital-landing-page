import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
