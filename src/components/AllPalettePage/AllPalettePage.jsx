import React, {useState} from 'react';
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as paletteActions from "../../actions/PaletteActions";
import PaletteDeleteModal from "../modals/PaletteDeleteModal";

const AllPalettePage = (props) => {
  let {code, name, user_id, id} = props.palette;
  const [data, setData] = useState({
    redirect: false,
    code,
    name,
    user_id,
    id
  })
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  name = name.charAt(0).toUpperCase() + name.slice(1);
  const username = props.users.items.find(user => user.id === user_id).username

  
  const handleClickInfo = () => {
    // console.log("card: ", props.palette.id)
    // console.log(id)
    setData({...data, redirect: true})
    // props.dispatch(paletteActions.paletteUpdate(code, name, user_id, id));
  };

  if (data.redirect) {
    return (
      // we are passing in data to the UpdatePalettePage component
      // https://stackoverflow.com/questions/57524053/how-to-pass-props-one-page-to-another-page-via-react-router
      <Redirect
        to={{
          pathname: "/update-palette",
          state: { data: data },
        }}
      />
    );
  } else {

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
              {/* <Link to="/update-palette"> */}
              <Button variant="info" onClick={handleClickInfo}>
                Edit
              </Button>{" "}
              {/* </Link> */}
              {/* <Button variant="danger" onClick={handleClickDelete}> */}
                <PaletteDeleteModal closeModal={closeModal} show={show} palette_id={data.id}/>
                  {/* Delete */}
              {/* </Button> */}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const { users } = state;
  const { items } = users;
  return {
    items,
  };
}

export default connect(mapStateToProps)(AllPalettePage);