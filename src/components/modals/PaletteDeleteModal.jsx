import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";

import * as paletteActions from "../../actions/PaletteActions";

const PaletteDeleteModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    // console.log(props.palette_id);
    const { dispatch, palette_id } = props;
    dispatch(props.paletteDelete(palette_id));
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    paletteDelete: (palette_id) => {
      dispatch(paletteActions.paletteDelete(palette_id));
    },
  };
};

export default connect(null, mapDispatchToProps)(PaletteDeleteModal);
