import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Project3 from "../Assets/Project_3.PNG";
import Project2 from "../Assets/Project_2.png";
import HW13 from "../Assets/HW13-Burger_Logger.PNG";
import HW12 from "../Assets/HW12-Employee_Management_System.jpg";
import HW11 from "../Assets/HW11-Note_Taker.jpg";
import HW10 from "../Assets/HW10-Team_Profile_Generator.jpg";

const CardInfo = [
  {
    image: Project3,
    title: "Project #3 - Smood",
    text:
      "Smood was created with to help user to listen to music according to what they are feeling. We used Spotify API to retrieve curated music based on user's choices. React and Material UI helps develope the interfaced you enjoy when you use the app.",
    url: "https://projectsmood.herokuapp.com/",
  },
  {
    image: Project2,
    title: "Project #3 - Afterly",
    text:
      "This is the second group project. We designed a multifunctional app that will take care of all people's documents after death. the case # as the primary key in the database. Technology used: Javascript, sequelize, Semantic UI, bootstrap, mysql, API calls, Post and Get",
    url: "https://sheltered-escarpment-16015.herokuapp.com/",
  },
  {
    image: HW13,
    title: "Burger Logger - Sequelize",
    text:
      "This app will be able to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).Run npm install to add the required dependencies such as Inquirer and Util before running the index.js file.",
    url: "https://immense-depths-85409.herokuapp.com/",
  },
  {
    image: HW12,
    title: "Employee Management System - NoSQL",
    text:
      "Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. this app was created as the solution for managing a company's employees using node, inquirer, and MySQL.",
    url: "https://github.com/williamsffc/Employee-Tracker",
  },
  {
    image: HW11,
    title: "Note Taker",
    text:
      "Since it is easy to forget daily task, Note taker has been created to help keeping tracking of these easily forgettable tasks. The app will keep track of your daily tasks  without any problems, so you do not have to worry about them anymore.",
    url: "https://github.com/williamsffc/Note-Taker-Express",
  },
  {
    image: HW10,
    title: "Team Profile Generator",
    text:
      "This app will help businesses by creating a list of all employees within its own teams. This app requests contact information from manager, engineers and interns.",
    url: "https://github.com/williamsffc/Team-Profile-Generator",
  },
];

const renderCard = (card, index) => {
  return (
    <Card key={index}>
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button variant="info" target="_blank" href={card.url}>
          Check it out
        </Button>
      </Card.Body>
    </Card>
  );
};

export class ProjectCard extends Component {
  render() {
    return (
    
        <Row className="grid">
          <Col xs="2"></Col>
          <Col>
          {CardInfo.map(renderCard)}
          </Col>
          <Col xs="2"></Col>
        </Row>
     
    );
  }
}

export default ProjectCard;
