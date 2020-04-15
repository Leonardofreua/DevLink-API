import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font: 400 14px 'Fira Code', monospace;;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font: 400 14px 'Fira Code', monospace;;
  }

  button {
    cursor: pointer;
  }
`;
