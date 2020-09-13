import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    const { dispatch } = props;
    if (hexcode && colorName) {
      dispatch(paletteActions.paletteCreate(hexcode, colorName));
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

export default CreatePalettePage;
