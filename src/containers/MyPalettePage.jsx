import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AllPalettePage from "../components/AllPalettePage/AllPalettePage";

const AllPalettePages = (props) => {
  console.log(props.palettes.items);
  console.log(props);
  const myPalettes = props.palettes.items.filter(palette => palette.user_id === props.user.pk)

  return (
    <div>
      <Container>
        {Object.keys(myPalettes).length !== 0 ? (
          <div>
            <Row xl={4} md={2} sm={2} xs={1}>
              {myPalettes.map((pal, index) => (
                <Col key={index}>
                  <AllPalettePage palette={pal} users={props.users} />
                </Col>
              ))}
            </Row>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { authentication, palettes, users } = state;
  const {user} = authentication
  return {
    user,
    users,
    palettes,
  };
};

export default connect(mapStateToProps)(AllPalettePages);
