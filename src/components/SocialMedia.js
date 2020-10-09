import React from "react";
import { Row, Col } from "react-bootstrap";
import { ArchiveFill, ArrowUpCircleFill, Award, BookmarkCheckFill } from "react-bootstrap-icons";

export const SocialMedia = () => (
  <Row>
    <Col>
      <a
        target="blank"
        className="social-link"
        href="https://www.linkedin.com/in/williamsffc"
      >
        <ArchiveFill />
        LinkedIn
      </a>
    </Col>
    <br />
    <Col>
      <a
        target="blank"
        className="social-link"
        href="https://github.com/williamsffc"
      >
        <ArrowUpCircleFill />
        GitHub
      </a>
    </Col>
    <br />
    <Col>
      <a
        target="blank"
        className="social-link"
        href="https://www.facebook.com/williamsffc/"
      >
        <Award />
        Facebook
      </a>
    </Col>
    <br />
    <Col>
      <a
        target="blank"
        className="social-link"
        href="https://drive.google.com/file/d/1vhIvdk26fP6ImwxLs1HOZa1reZkTZ4-y/view?usp=sharing"
      >
        <BookmarkCheckFill />
        Resume
      </a>
    </Col>
  </Row>
);