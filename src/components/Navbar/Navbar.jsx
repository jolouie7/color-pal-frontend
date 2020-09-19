import React from 'react';
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

import * as userActions from "../../actions/UserActions";

const NavbarComponent = (props) => {
  const {user} = props;

  const handleClick = () => {
    props.logoutUser();
  };

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
              <Nav>
                <Button variant="dark">Hello {user.username}!</Button>
                <Button variant="dark" onClick={handleClick}>
                  Logout
                </Button>
              </Nav>
            ) : (
              <Nav>
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="dark">Sign Up</Button>
                </Link>
              </Nav>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(userActions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
