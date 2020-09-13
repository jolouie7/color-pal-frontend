import React from 'react';
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
  const {user} = props;
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav.Link href="/">Color-Pal</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/palettes">All Palettes</Nav.Link>
            <Nav.Link href="#">My Palettes</Nav.Link>
            <Nav.Link href="/create-palette">Create Palette</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Nav.Link>Hello {user.username}!</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user,
  };
};

export default connect(mapStateToProps)(NavbarComponent);
