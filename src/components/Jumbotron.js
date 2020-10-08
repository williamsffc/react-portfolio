import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Navbarbg from "../Assets/Navbar-bg.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${Navbarbg}) no-repeat fixed bottom;
    background-size: cover;
    height: 250px;
    position: relative;
    z-index: -2;
    color: white;
  }
  .overlay{
      background-color: #000;
      opacity: 0.6;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum et
          assumenda repellendus maiores quia veritatis laboriosam. Fuga
          obcaecati dolorem id iste mollitia porro sunt totam, tempora amet.
          Iusto, saepe beatae!
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
