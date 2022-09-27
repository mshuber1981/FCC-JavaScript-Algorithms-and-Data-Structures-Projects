import React from "react";
import styled from "styled-components";
// Icons
import { FaGithub, FaFreeCodeCamp } from "react-icons/fa";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: var(--primary);

  a {
    margin: 0 1rem;
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
        <FaGithub />
      </a>

      <a
        href="https://www.freecodecamp.org/mshuber1981"
        aria-label="Check out my Free Code Camp profile."
        className="link-icons"
      >
        <FaFreeCodeCamp />
      </a>
    </StyledFooter>
  );
}
