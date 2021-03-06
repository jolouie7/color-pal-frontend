import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AllPalettePage from "../components/AllPalettePage/AllPalettePage";

const AllPalettePages = (props) => {

  return (
    <div>
      <Container>
        {Object.keys(props.users).length !== 0 ? (
          <div>
            <Row xl={4} md={2} sm={2} xs={1}>
              {props.palettes.items.map((pal, index) => (
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
  const { users, palettes } = state;
  return {
    users,
    palettes
  };
};

export default connect(mapStateToProps)(AllPalettePages);
