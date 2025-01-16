import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CCP_CERTIFICATE, CODEFORCES_LINK, GITHUB_LINK, LEETCODE_LINK, EMAIL, LINKEDIN_LINK, MEDIUM_LINK } from "../../config";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> BRIEF ABOUT ME</span>
            </h1>
            <p className="home-about-body">
              Currently working as a <b className="purple">full stack</b>{" "}
              developer in the{" "}
              <b className="purple">Internation Olympic Committee (IOC) </b>team
              at Hashedin By Deloitte since November 2023
              <br />
              <br />
              Graduated in 2023 with a B.Tech in Computer Science from Jaypee
              Institute of Information Technology
              <br />
              <br />
              Achieved <b className="purple">AWS Certified Cloud Practitioner </b>certification. <a href={CCP_CERTIFICATE} target="_blank" rel="noreferrer" className="purple">[link]</a>
              <br />
              <br />
              Have handson experience with
              <i>
                <b className="purple">
                  {" "}
                  C++, Javascript, Node.js(Express.js), React.js, MySQL,
                  PostgreSQL, RabbitMQ, Docker, AWS{" "}
                </b>
              </i>
              <br />
              <br />
              Major field of interest is building &nbsp;
              <i>
                <b className="purple">scalable backends</b> and <b className="purple">optimized frontend</b>.&nbsp;
                I also enjoy exploring fields like
                <b className="purple">&nbsp;generative ai and blockchain</b>
              </i>
              <br />
              <br />
              Passionate about Algorithmic Problem Solving with ratings:
              <i>
                 <b className="purple">&nbsp;Codeforces 1445(Specialist)</b>&nbsp; 
                 and <b className="purple">Leetcode Knight (Top 5%)</b> 
              </i>
              <br />
              <br />
              Have done internships at Sarva Labs and Hashedin as a full
              stack developer for 9 months
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={GITHUB_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={LEETCODE_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={CODEFORCES_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiCodeforces />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={EMAIL}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={MEDIUM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
