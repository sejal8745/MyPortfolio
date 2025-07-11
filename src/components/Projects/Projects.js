import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Github from "../About/Github";
import EaseMarket from "../../Assets/Projects/easemarket.png";
import studyhut from "../../Assets/Projects/studyhut.png";
import agrii from "../../Assets/Projects/agrii.png";
import illitrate from "../../Assets/Projects/illitrate.png";
import techgen from "../../Assets/Projects/techgen.png";
import spendsavvy from "../../Assets/Projects/spendsavvy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EaseMarket}
              isBlog={false}
              created="Nov 2023"
              title="Ease-Market"
              description="Ease-Market is a responsive E-commerce platform built using REST architecture with SEO-friendly design. It features secure Role-Based Access Control (RBAC) to differentiate between user and admin access, integrates Braintree for smooth payment processing, and uses JWT tokens to ensure secure user authentication and authorization."
              ghLink="https://github.com/sejal8745/Easy-Market"
              techStacks={[
                "React.js",
                "Javascript",
                "Ant Design",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spendsavvy}
              isBlog={false}
              created="Jul 2023"
              title="SpendSavvy"
              description="Built a full-stack expense tracker using React, Node.js, Express, and MongoDB Atlas, featuring secure JWT-based authentication, intuitive CRUD operations, categorized list views, and dynamic analytical dashboards. Integrated Ant Design to visualize spending trends, enable smart filtering, and provide insightful summaries of user expenses."
              ghLink="https://github.com/sejal8745/ExpenseManagement"
              techStacks={[
                "React.js",
                "Javascript",
                "Ant Design",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrii}
              isBlog={false}
              created="Nov 2021"
              title="Let's Agrii"
              description="LET’S AGRII is a farmer-centric platform designed to eliminate middlemen by offering fair pricing for crops. It simplifies the selling process through a user-friendly interface that requires minimal training, addressing core challenges like pricing transparency and accessibility for Indian farmers."
              ghLink="https://github.com/sejal8745/Let-s-Agrii"
              techStacks={["React.js", "Node.js", "Express", "MongoDB"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techgen}
              isBlog={false}
              created="Mar 2021"
              title="TechnoGen"
              description="is a full-stack MERN platform designed to bridge the generational tech gap through 5+ intuitive features. It includes dynamic multilingual dictionary search (10+ languages), real-time tech news via REST APIs, and secure Firebase authentication to foster digital literacy across age groups."
              ghLink="https://github.com/sejal8745/SheHacks_Team-017"
              techStacks={[
                "React.js",
                "Javascript",
                "CSS",
                "Adobe XD",
                "Adobe Illustrator",
                "Firebase",
                "Material UI",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={illitrate}
              isBlog={false}
              created="Jan 2021"
              title="ILLITRATE"
              description="ILLITRATE is a visually immersive learning platform that simplifies complex programming concepts through animations, real-life anecdotes, and interactive puzzles—making learning engaging, memorable, and addictive."
              ghLink="https://github.com/sejal8745/ILLITRATE"
              demoLink="https://illitrate-d8949.web.app/"
              techStacks={["React.js", "Javascript", "React Router", "CSS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studyhut}
              isBlog={false}
              created="Dec 2020"
              title="Study Hut"
              description="Built a full-stack online classroom platform using React.js, Node.js, Express.js, and MongoDB, offering dedicated tutor and student panels to manage assignments, access curated books, and explore instructor-recommended project ideas—all in one centralized space."
              ghLink="https://github.com/sejal8745/Classroom"
              techStacks={["React.js", "Node.js", "Express", "MongoDB"]}
            />
          </Col>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default Projects;
