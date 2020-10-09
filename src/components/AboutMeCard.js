import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import image1 from "../Assets/AboutMe.jpg";

export class AboutMeCard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="3"></Col>
          <Col>
            <Card>
              <Image src={image1} alt="Me-pic" rounded fluid />
            </Card>
          </Col>
          <Col xs="3"></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMeCard;
