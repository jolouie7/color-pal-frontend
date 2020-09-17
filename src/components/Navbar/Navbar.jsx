import React from 'react';
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const NavbarComponent = (props) => {
  const {user} = props;
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Button variant="dark">Color-Pal</Button>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Button variant="dark">Home</Button>
            </Link>
            <Link to="/palettes">
              <Button variant="dark">All Palettes</Button>
            </Link>
            <Link to="/my-palettes">
              <Button variant="dark">My Palettes</Button>
            </Link>
            <Link to="/create-palette">
              <Button variant="dark">Create Palette</Button>
            </Link>
          </Nav>
          <Nav>
            {user ? (
              <Button variant="dark">Hello {user.username}!</Button>
            ) : (
              <Link to="/login">
                <Button variant="dark">Login</Button>
              </Link>
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
