import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as userActions from "../../actions/UserActions";

const AllPalettePage = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [username, setUsername] = useState([]);

  // useEffect(() => {
  //   setUsers(props.dispatch(userActions.getAll()));
  // }, [])

  let {code, name, user_id} = props.palette;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  // useEffect( () => {
  //   setLoading(true)
  //   setUsername(username)
  //   setLoading(false)
  // }, [])
  // const username = props.items.filter(user => user.id === user_id);

  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img
          variant="top"
          style={{ opacity: "0" }}
          // src="holder.js/100px180"
        /> */}
          <Card style={{ height: "5rem", backgroundColor: `#${code}` }} />
          <Card.Body>
            <Card.Title>#{code}</Card.Title>
            {users.loading && <em>Loading users...</em>}
            {/* //! Line underneth doesn't work */}
            {/* <Card.Text>{name} by {Object.keys(props.items).length !== 0 ? props.items.filter(user => user.id === user_id) : null}</Card.Text> */}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { users } = state;
  const { items } = users;
  return {
    items,
  };
}

export default connect(mapStateToProps)(AllPalettePage);

// ! Fix line 42 so that i can get the username of the user who created the palette card