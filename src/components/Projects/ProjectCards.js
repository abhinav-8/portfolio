import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Card.Title style={{fontWeight:"bolder", textAlign:"left"}}>{props.title}</Card.Title>
          <li className="social-icons">
                <a
                  href={props.link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
          </li>
        </div>
        <br/>

        <Card.Text style={{textAlign:"left"}}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" , color:"grey"}}>
          {props.techStack}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
