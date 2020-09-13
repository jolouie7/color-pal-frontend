import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import * as paletteActions from "../../actions/PaletteActions";

const CreatePalettePage = (props) => {
  const [palette, setPalette] = useState({
    hexcode: "",
    colorName: "",
    submitted: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPalette({ ...palette, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPalette({ ...palette, submitted: true });
    const { hexcode, colorName } = palette;
    const { dispatch, user } = props;
    console.log("createUser: ", user)
    if (hexcode && colorName && user) {
      dispatch(props.paletteCreate(hexcode, colorName, user));
    }
  };

  return (
    <div>
      <Container>
        <Form name="form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Hex Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Hex Code"
              name="hexcode"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Name of your Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Color"
              name="colorName"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    paletteCreate: (hexcode, colorName, user) => {
      dispatch(paletteActions.paletteCreate(hexcode, colorName, user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePalettePage);
// export default CreatePalettePage;
