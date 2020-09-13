import React from 'react';
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import * as userActions from "../../actions/UserActions";

const AllPalettePage = (props) => {
  let {code, name, user_id} = props.palette;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const username = props.users.items.find(user => user.id === user_id).username

  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card style={{ height: "5rem", backgroundColor: `#${code}` }} />
          <Card.Body>
            <Card.Title>#{code}</Card.Title>
            <Card.Text>
              {name} by {username}
            </Card.Text>
            <Button variant="info">Edit</Button> {" "}
            <Button variant="danger">Delete</Button>
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