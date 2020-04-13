import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url(
    'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap'
    );

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font: 400 14px Fira Code, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font: 400 14px Fira Code, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
