import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";

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
  }, [])

  console.log(props)

  return (
    <div>
    {
      Object.keys(props.users).length !== 0 ? (
    <div>
      {palettes.map((pal) => (
        <AllPalettePage palette={pal} users={props.users}/>
      ))}
    </div>)
    :
    null
    }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { users } = state;
  // const { items } = users;
  return {
    // items,
    users
  };
}

export default connect(mapStateToProps)(AllPalettePages);
