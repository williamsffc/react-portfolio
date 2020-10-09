import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Navbarbg from "../Assets/Navbar-bg.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${Navbarbg}) fixed bottom;
    background-size: cover;
    height: 200px;
    /* position: relative; */
    z-index: -2;
    color: white;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  h1 {
    color: black;
  }
  p {
    color: black;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome to my Portfolio!!</h1>
        <p>
          This version of my portfolio was created with React.js. I hope you like it!
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
