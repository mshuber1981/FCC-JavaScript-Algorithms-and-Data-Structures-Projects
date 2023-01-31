import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  /* https://brandcolors.net/b/freecodecamp */
  --bs-success-rgb: 0,100,0;
  --primary-light: #80b280;
  --primary: #006400;
  --primary-dark: #003200;
  --nav-height: 61.5px;
  --footer-height: 8vh;
  --transition: all 0.3s linear;
}

/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

.section {
  min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.description {
  max-width: 55rem;
}

form {
  width: 100%;
  max-width: 30rem;
}

.modal-body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

.modal-title.h4 {
  color: #45413C;
}
`;

export default GlobalStyles;
