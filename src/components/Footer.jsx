import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";

const StyledFooter = styled.footer`
  height: var(--nav-height);
  background: var(--primary);

  .link-icons {
    line-height: 0;
    font-size: 2.25rem;
    margin: 0 1rem;
    transition: var(--transition);
    color: #fbfdff;

    &:hover {
      color: #45413c;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <a
        href="https://github.com/mshuber1981"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="fa:github" />
      </a>

      <a
        href="https://www.freecodecamp.org/mshuber1981"
        aria-label="Check out my Free Code Camp profile."
        className="link-icons"
      >
        <Icon icon="fa-brands:free-code-camp" />
      </a>
    </StyledFooter>
  );
}
