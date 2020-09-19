import React from "react";
// https://www.npmjs.com/package/react-router-bootstrap
import { LinkContainer } from "react-router-bootstrap";
// https://react-bootstrap.github.io/components/navbar/
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        bg="primary"
        variant="dark"
        expand="xl"
        fixed="top"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Palindrome-Checker">
              <Nav.Link>Palindrome Checker</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Roman-Numeral-Converter">
              <Nav.Link>Roman Numeral Converter</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/ROT13">
              <Nav.Link>ROT13</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Valid-Phone-Number">
              <Nav.Link>Valid Phone Number</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
