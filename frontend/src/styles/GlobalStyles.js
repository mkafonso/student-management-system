import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--background);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: var(--primary);
    transition: color .2s ease-out;
  }


  :root {
    --background: #f3f5f8;

    --primary: #1b1f23;
    --secondary: #4D4D4D;
    --terciary: #0366d6;

    --success: #7cd27b;
    --error: #f9826c;
    --pending: #e59d27;
  }
`;
