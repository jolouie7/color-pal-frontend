import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as userActions from "../../actions/UserActions";

const HomePage = (props) => {
  useEffect(() => {
    props.dispatch(userActions.getAll());
  }, [])

  const handleClick = () => {
    props.dispatch(userActions.logout());
  }

  const { user, users } = props;
  return (
    <div>
      {/* <h1>Hi {user.firstName}!</h1> */}
      <p>You're logged in with React & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {users.loading && <em>Loading users...</em>}
      {/* {users.error && <span className="text-danger">ERROR: {users.error}</span>} */}
      <h1>Username: {user.username}</h1>
      <h1>Email: {user.email}</h1>
      <p>
        <Link to="/login" onClick={handleClick}>
          Logout
        </Link>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

export default connect(mapStateToProps)(HomePage);