import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fluidslider from "../../Assets/Projects/fluidslider.png";
import gonote from "../../Assets/Projects/gonote.png";
import moviedekho from "../../Assets/Projects/moviedekho.png";
import cookerr from "../../Assets/Projects/cookerr.png";
import scanx from "../../Assets/Projects/scanx.png";
import safer from "../../Assets/Projects/safer.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookerr}
              isBlog={false}
              title="Cookerr"
              description="cookerr is a native android application which will help us in cooking the various cuisine🍛.You can find different cuisine via category such as Chicken🐓,Beef🥩,Desert🍨etc.The app will show the best recipes available on the Internet and provide us with the ingredients and cooking instruction for the cuisine. In case of any confusion,the app has that feature where we can find the elaborative blog📖 or Online tutorial on youtube."
              link="https://github.com/prodeveloper03/cookerr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safer}
              isBlog={false}
              title="Safer"
              description="A sample Women Safety app 👩 built using Modern Android Development
              Guardian Details: Here, you can add or delete the list of guardians with their respective name, relation, phone numbers and email id.
              Check Location: Here, you will get the current location of the user by adding a marker on the inbuilt google map.
              Emergency: This plays an important role in the app. It sends an instant text message and mail to the list of guardians. The message contains the current location of user with google map link created."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gonote}
              isBlog={false}
              title="Editor.io"
              description="GO-NOTE is a Native android application that will help you to take your notes and remember the important stuff. You can attach hyperlinks🔗 , photos🎞 etc to your application. To set your priority notes we can tag the notes with unique colours which will prioritize your notes as per your requirements."
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviedekho}
              isBlog={false}
              title="Movie-Dekho"
              description="MovieDekho is an native android application which recomend latest released movie on the basis of IMDB rating⭐️"
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scanx}
              isBlog={false}
              title="ScanX"
              description="ScanX is native android application which is a QR-Code-scanner . "
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fluidslider}
              isBlog={false}
              title="Fluid-Slider"
              description="FluidSlider is a modern android library which provide the developers to add the sliding rating UI feature in a very easy implementation ."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
