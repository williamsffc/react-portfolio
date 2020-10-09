import React from "react";
import styled from "styled-components";
import { SocialMedia } from "../components/SocialMedia";

const Styles = styled.div`
  .Intro {
    text-align: center;
  }
`;

export const Contact = () => (
  <Styles>
    <h3 className="Intro">
      For any new project inquiries or job lead... Please fill out the form
      below and I will get back to you as soon as possible..
    </h3>
    <br></br>
    <br></br>
    <SocialMedia />
    <br></br>
    <br></br>
    <h4 className="Intro">williamsffc@gmail.com</h4>
    <h4 className="Intro">626-605-3204</h4>
  </Styles>
);
