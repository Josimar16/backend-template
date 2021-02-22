import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;
    --color-background: #312E38;
    --color-primary: #28262E;
    --color-error: #E53030;
    --color-secundary: #FF9000;
    --color-complement: #3E3B47;
    --color-text-complement: #999591;
    --color-text: #F4EDE8;
    --color-text-base: #FFFFFF;
    --color-calendar-week: #666360;
    --color-disabled: #232129;
    --color-toast-success: #2E656A;
    --color-toast-success-light: #E6FFFA;
    --color-toast-info: #3172B7;
    --color-toast-info-light: #EBF8FF;
    --color-toast-error: #C53030;
    --color-toast-error-light: #FDDEDE;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100vh;
  }
  body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialised;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    color: var(--color-text);
    font: 500 1.6rem;
  } 
  h1, h2, h3, h4, h5, h6, b, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  @media (min-width: 720px) {
     :root {
        font-size: 62.5%;
    }
}
`;