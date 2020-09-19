import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import Title from "./Title";
import Wrapper from "./Wrapper";
import Description from "./Description";
import CallToActionButton from "./CallToActionButton";

const index = () => {

  return (
    <Wrapper>
      <Title>Welcome!</Title>
      <Description>
        App that helps you find new color shchmes or just create your own =)
      </Description>

      <CallToActionButton>
        <Link
          to="/palettes"
          style={{ textDecoration: "none", color: "palevioletred" }}
        >
          View all Palettes!
        </Link>
      </CallToActionButton>
    </Wrapper>
  );
}

export default index
