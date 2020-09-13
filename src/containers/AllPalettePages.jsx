import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AllPalettePage from "../components/AllPalettePage/AllPalettePage";
import * as userActions from "../actions/UserActions";

const AllPalettePages = (props) => {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://127.0.0.1:8000/api/palette-list/");
      response = await response.json();
      setPalettes(response);
    }

    fetchMyAPI();
  }, []);

  console.log(props);

  return (
    <div>
      <Container>
        {Object.keys(props.users).length !== 0 ? (
          <div>
            <Row xl={4} md={2} sm={2} xs={1}>
              {palettes.map((pal) => (
                <Col>
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
  const { users } = state;
  // const { items } = users;
  return {
    // items,
    users,
  };
};

export default connect(mapStateToProps)(AllPalettePages);
