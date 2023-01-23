import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(params) {
    return (
      <div>
        <header>
          <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">E-commerce</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/cart">
                    <i className="fas fa-shopping-cart"></i>Cart
                  </Nav.Link>
                  <Nav.Link href="/login">
                    <i className="fas fa-user"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    );
}

export default Header;
