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
  --nav-height: 61px;
  --min-footer-height: 7vh;
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
  min-height: calc(93vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a:hover {
  cursor: pointer;
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: #FBFDFF;

  &:hover {
        color: #45413C;
      }
}
`;

export default GlobalStyles;
