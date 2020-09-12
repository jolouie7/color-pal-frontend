import React from 'react'

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AllPalettePage = (props) => {
  let {palette, code, name} = props.palette;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            style={{ background: `#${code}` }}
            src="holder.js/100px180"
          />
          <Card.Body>
            <Card.Title>{code}</Card.Title>
            <Card.Text>
              {name} by USERNAME
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default AllPalettePage
