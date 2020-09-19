import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

import * as userActions from "../../actions/UserActions";
import * as paletteActions from "../../actions/PaletteActions";
import Hero from "../../styles/hero"

const HomePage = (props) => {
  useEffect(() => {
    props.getAllUsers();
    props.getPalettes();
  }, [])

  const handleClick = () => {
    props.logoutUser();
  }

  // const { user, users } = props;
  return (
    <div>
      <Hero />
      {/* <p>You're logged in with React & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {users.loading && <em>Loading users...</em>}
      <h1>Email: {user.email}</h1> */}
      {/* <p>
        <Link to="/login" onClick={handleClick}>
          Logout
        </Link>
      </p> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { users, authentication, palettes } = state;
  const { user } = authentication;
  return {
    user,
    users,
    palettes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(userActions.getAll());
    },
    getPalettes: () => {
      dispatch(paletteActions.getAll());
    },
    logoutUser: () => {
      dispatch(userActions.logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);