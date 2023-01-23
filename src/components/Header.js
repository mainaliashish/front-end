import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
                    <i className="fas fa-user"></i>Login
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
