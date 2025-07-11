import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import Intello from "../../Assets/Experience/Intello.png";
import Dotech from "../../Assets/Experience/Dotech.png";
import Ieee from "../../Assets/Experience/Ieee.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong>
            My Professional <span className="purple">Journey</span>
          </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          From intern to contributor - every experience shaped my development
          journey.
        </p>
        <Row className="justify-content-center">
          <Col md={12}>
            <ExperienceCard
              logo={Intello}
              position="Software Developer - Full Stack Developer"
              company="Intellosync Technologies Pvt. Ltd."
              duration="July 2024 — Ongoing"
              companyLink="https://intellosync.com/"
              description={
                <p style={{ color: "white", whiteSpace: "pre-line" }}>
                  <strong style={{ fontStyle: "italic", color: "#BCCCDC" }}>
                    Advanced Query & Analytics Engine
                  </strong>
                  {"\n"}• Developed an advanced filtering & sorting engine using
                  Mongoose & MongoDB aggregation pipelines, supporting complex
                  queries (AND, OR, IS, CONTAINS, BETWEEN) across 20+ contract
                  fields for optimized data retrieval. • Implemented the
                  Management Information System (MIS) report generation and
                  Excel exports with Redis-backed async job queues (BullMQ),
                  ensuring efficient processing of large datasets in cloud and
                  on-premise environments. • Developed a Persistent View
                  Management system, enabling users to create, save, and reuse
                  complex filtered views with multi-condition queries, enhancing
                  Contract Insights, pre-filtered analytics, and decision-making
                  workflows.
                  {"\n\n"}
                  <strong style={{ fontStyle: "italic", color: "#BCCCDC" }}>
                    Alert Service & Contract Lifecycle Features
                  </strong>
                  {"\n"}• Architected a high-performance Alert Service using
                  MongoDB aggregation pipelines and event-driven processing,
                  delivering time-sensitive notifications on contract milestones
                  across 10,000+ contracts daily for enterprise clients. •
                  Integrated Cron Jobs for scheduled alert execution, ensuring
                  timely email notifications & contract status updates. • Built
                  frontend using React.js and Redux, enabling users to configure
                  contract renewal settings & opt-out periods.
                </p>
              }
              skills={[
                "ReactJS",
                "NodeJs",
                "Material UI",
                "MongoDB",
                "ExpressJS",
                "Redis",
                "JavaScript",
                "MongoDB",
              ]}
            />
            <ExperienceCard
              logo={Intello}
              position="Software Developer - Intern"
              company="Intellosync Technologies Pvt. Ltd."
              duration="Jan 2024 — June 2024"
              companyLink="https://intellosync.com/"
              description={
                <p style={{ color: "white", whiteSpace: "pre-line" }}>
                  <strong style={{ fontStyle: "italic", color: "#BCCCDC" }}>
                    AI-Integrated Smart Annotation System
                  </strong>
                  {"\n"}• Designed an AI-integrated Legacy Contract PDF
                  Rendering System handling 100+ Page PDF documents using
                  ReactPDF & Canvas APIs, optimizing Scaling, Text Layering, and
                  streamlining contract creation and verification. •
                  Highlighting the Pixel-Precise Bounding Box Overlays to
                  visualize AI-extracted contract attributes, implementing
                  synchronized scrolling functionality for seamless navigation
                  between extracted metadata and the source document.
                </p>
              }
              skills={[
                "ReactJS",
                "Material UI",
                "ReactPDF",
                "JavaScript",
                "Github",
              ]}
            />
            <ExperienceCard
              logo={Dotech}
              position="Frontend Developer - Intern"
              company="DoTech Technologies Pvt. Ltd."
              duration="Jan 2022 — Feb 2022"
              companyLink="https://dotech.online/"
              description={
                <p style={{ color: "white", whiteSpace: "pre-line" }}>
                  {/* <strong style={{ fontStyle: "italic", color: "#BCCCDC" }}>
                    AI-Integrated Smart Annotation System
                  </strong> */}
                  {/* {"\n"} */}• Developed Epic Much frontend, fostering fun
                  and professional networking, showcasing React prowess and
                  user-centric approach. • Implemented search functionality,
                  linked backend APIs for real-time data, and designed a career
                  page, fetching the latest jobs for users. • Designed a
                  responsive layout for cross-device UX, utilized React hooks
                  for profile status and components for interactive UI
                </p>
              }
              skills={[
                "ReactJS",
                "TypeScript",
                "HTML",
                "CSS",
                "User interface design",
                "Gitlab",
                "Redux",
              ]}
            />
            <ExperienceCard
              logo={Ieee}
              position="Head of Graphics and Designing Team"
              company="IEEE Student Branch - IIITM Gwalior"
              duration="Aug 2020 — Jan 2022"
              companyLink="https://ieee.iiitm.ac.in/"
              description={
                <p style={{ color: "white", whiteSpace: "pre-line" }}>
                  • Designed innovative advertising materials across various
                  platforms such as flyers, menus, and posters, effectively
                  boosting visibility within the target audience. • Co-authored
                  an annual Battlezone competition booklet, conceiving the
                  concept and delivering succinct yet compelling content that
                  engaged participants while conveying crucial information. •
                  Orchestrated seamless online collaboration during the
                  pandemic, synchronizing schedules with my partner. Employed a
                  balanced approach to task delegation and fostered dynamic
                  brainstorming sessions, resulting in successful joint project
                  completion.
                </p>
              }
              skills={[
                "Graphic Design",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe XD",
                "Canva",
                "Content Creation",
                "Team Leadership",
                "Collaboration",
              ]}
            />
            <ExperienceCard
              //   logo={Ieee}
              position="UI/Ux Developer - Freelancer"
              company="Aarav Infotech"
              duration="Apr 2021 — May 2021"
              description={
                <p style={{ color: "white", whiteSpace: "pre-line" }}>
                  • Developed the responsive front-end for CoviCare, a
                  full-stack website with 7+ screens, aiding COVID-19 patients
                  with accessible resource information. • Designed user-friendly
                  UI emphasizing UI/UX skills and research for improved access
                  and collaborated with 4+ team members on frontend-backend
                  integration, creating a seamless, effective digital platform
                  through teamwork.
                </p>
              }
              skills={[
                "Web Development",
                "Adobe XD",
                "FIgma",
                "JavaScript",
                "User Interface Design",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
