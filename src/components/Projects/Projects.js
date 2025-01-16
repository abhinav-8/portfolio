import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some Noteworthy Projects
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              techStack="Node.js | Express.js | RabbitMQ | MySQL | Sequelize"
              isBlog={false}
              title="TravelAero"
              description={<div>
              • A microservices-based platform using HTTP for inter-service communication having secure
authentication (JWT) and role-based access control, logging and error handling.
<br/><br/>• Orchestrated microservices using API Gateway for streamlined requests. Wrote cron jobs for automated
tasks and integrated message queues to send email notifications upon flight booking and reminders.</div>}
              link="https://github.com/abhinav-8/TravelAero"
            />
          </Col>

          <Col md={6} className="project-card">
          <ProjectCard
              techStack="Node.js | Socket.IO | Reactjs"
              isBlog={false}
              title="ChatOn"
              description={<div>
              • A chat application where multiple users can join in a room and also has features of sharing emoticons and
              scroll-to-last.
<br/><br/>• A chat application where multiple users can join in a room and also has features of sharing emoticons and
scroll-to-last.</div>}
              link="https://github.com/abhinav-8/Chat-App"
            />
          </Col>

          <Col md={6} className="project-card">
          <ProjectCard
              techStack="Ethereum Blockchain(Polygon) | Solidity | Nextjs"
              isBlog={false}
              title="NFT Marketplace"
              description={<div>
              An NFT marketplace built using NextJs and Solidity that enables the creation, sale, and purchase of digital art
              as NFTs which is based on ERC721 smart contract and deployed to Matic Mumbai testnet.</div>}
              link="https://github.com/abhinav-8/NFT-Marketplace"
            />
          </Col>
          
          <Col md={6} className="project-card">
          <ProjectCard
              techStack="Ethereum Blockchain | Solidity | Reactjs"
              isBlog={false}
              title="Live-Coin"
              description={<div>
              A crowdfunding platform developed using React.js and solidity which minimizes frauds and high fees by
              using Ethereum Blockchain.</div>}
              link="https://github.com/abhinav-8/Live-Coin"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
