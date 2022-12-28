import React from "react";
import { useAppContext } from "../appContext";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
// Icons
import { GiSunflower, GiMoon } from "react-icons/gi";
import FCC from "../media/free-code-camp.svg";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";

// Theme Toggle
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid white;

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    color: #fff;
  }
`;

// Spacer for fixed Navigation bar
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

function ThemeToggle() {
  const { theme, toggleTheme, closeExpanded } = useAppContext();

  return (
    <StyledSwitch onClick={closeExpanded}>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>{theme === "light" ? <GiSunflower /> : <GiMoon />}</div>
    </StyledSwitch>
  );
}

export default function NavBar({ navLinks }) {
  const { isExpanded, toggleExpanded, closeExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        bg="success"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="Free Code Camp Logo"
              src={FCC}
              width="35"
              height="35"
              className="d-inline-block align-top rounded-circle nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {navLinks.map((el) => {
                return (
                  <Nav.Item key={el.id}>
                    <Link
                      to={el.route}
                      className={
                        pathname === el.route ? "nav-link active" : "nav-link"
                      }
                      onClick={closeExpanded}
                    >
                      {el.name}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
            <Nav>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object),
};
