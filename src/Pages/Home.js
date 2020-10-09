import React from "react";
import styled from "styled-components";
import AboutMeCard from "../components/AboutMeCard";

const Styles = styled.div`
  .AboutMe {
    text-align: center;
  }
`;

export const Home = () => (
  <Styles>
    <div className="AboutMe">
      <h2>About Me</h2>
      <p>
        Hello everyone, my name is Williams... Yes, Williams with an S. For the
        longest time i wanted to change carrier and here i am taking a very
        fast-speed, tons of knowledge course. I always had a love for coding but
        I've never practiced nor took it seriously until now. For the first time
        in my life i can say and after taking this course... I really love
        coding.
      </p>
      <p>
        Thank you fo coming to my page... I promise you, this is not the final
        version of my portfolio... I will surprised you with the final draft of
        it.
      </p>
        <AboutMeCard />
      <br></br>
      <br></br>
      <br></br>
    </div>
  </Styles>
);
