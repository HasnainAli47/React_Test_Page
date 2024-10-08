import React from 'react';
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';
import '../assets/Styles/Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 w-100">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white align-items-center">
          <img
            src="path-to-your-logo.png"
            alt="Maardhcum"
            className="mr-2"
            style={{ height: '30px' }}
          />
          Maardhcum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-white px-3 custom-nav-link">New Car</Nav.Link>
            <Nav.Link href="#" className="text-white px-3 custom-nav-link">Used Car</Nav.Link>
            <Nav.Link href="#" className="text-white px-3 custom-nav-link">Buy Car</Nav.Link>
            <Nav.Link href="#" className="text-white px-3 custom-nav-link">Luxury</Nav.Link>
            <Nav.Link href="#" className="text-white px-3 custom-nav-link">Sports</Nav.Link>
            <Nav.Link href="#" className="text-white px-3 custom-nav-link">Classic</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="EN" id="language-dropdown" className="text-white">
              <NavDropdown.Item href="#">EN</NavDropdown.Item>
              <NavDropdown.Item href="#">AR</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-white mx-2">Sign In</Nav.Link>
            <Button href="#" className="custom-signup-btn">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
