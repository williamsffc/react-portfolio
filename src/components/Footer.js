import React from "react";
import {  Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #38686a;
    justify-content: center;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
  .navbar-toggle {
    color: #bbb;
  }
`;

export const Footer = () => (
  <Styles>
    <Navbar expand="lg" position="center" fixed="bottom">
      <Navbar.Brand> 2020 Copyright</Navbar.Brand>
    </Navbar>
  </Styles>
);
