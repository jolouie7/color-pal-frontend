import React, {useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

import * as paletteActions from "../../actions/PaletteActions";

const UpdatePalettePage = (props) => {
  const [palette, setPalette] = useState({
    code: "",
    name: "",
    user_id: "",
    palette_id: "",
    submitted: false,
  });
  // console.log(props.location.state.data);
  // {redirect: true, code: "C0C0C0", name: "silver", user_id: 1, id: 1}

  useEffect(() => {
    setPalette({
      ...palette,
      code: props.location.state.data.code,
      // This makes the name capitalized
      name:
        props.location.state.data.name.charAt(0).toUpperCase() +
        props.location.state.data.name.slice(1),
      user_id: props.location.state.data.user_id,
      palette_id: props.location.state.data.id,
    });
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPalette({ ...palette, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setPalette({
    //   ...palette,
    //   user_id: props.location.state.data.user_id,
    //   palette_id: props.location.state.data.id,
    // });
    setPalette({ ...palette, submitted: true });
    const { code, name, user_id, palette_id } = palette;
    const { dispatch } = props;
    if (code && name && user_id && palette_id) {
      dispatch(props.paletteUpdate(code, name, user_id, palette_id));
    }
  };

  return (
    <div>
      {console.log(props.location.state.data)}
      {/* paste in a bootstrap form here */}
      {/* fill the form with state data to be edited */}
      {/* once the user clicks update button, we will dispatch our action and hit our endpoint */}
      {/* we use also update the redux store when we dispatch? or do we re-fetch? */}
      <Container>
        <Form name="form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Hex code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Hexcode"
              onChange={handleChange}
              value={palette.code}
              name="code"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              value={palette.name}
              name="name"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    paletteUpdate: (code, name, user_id, palette_id) => {
      dispatch(paletteActions.paletteUpdate(code, name, user_id, palette_id));
    },
  };
};

export default connect(null, mapDispatchToProps)(UpdatePalettePage);
