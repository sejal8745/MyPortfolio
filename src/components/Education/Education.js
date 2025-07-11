import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import Particle from "../Particle";
import iiitm from "../../Assets/Education/iiitm.png";
import kvm from "../../Assets/Education/kvm.png";
import sem from "../../Assets/Education/sem.png";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={10}>
            <h1 className="project-heading">
              <strong>
                My <span className="purple">Educational Journey</span>
              </strong>
            </h1>
            <p style={{ color: "white" }}>
              A path of knowledge, learning, and growth from school to
              graduation.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} className="education-box p-4">
            <EducationCard
              logo={iiitm}
              degree="Integrated Post Graduation (B.Tech + M.Tech) in IT"
              college="IIITM Gwalior"
              location="Madhya Pradesh, India"
              duration="Aug 2019 — May 2024"
              grade="CGPA: 7.78"
            />
            <EducationCard
              logo={kvm}
              degree="Senior School Certificate Examination"
              college="KVM Public Sr. Secondary School"
              location="Rajasthan, India"
              duration="Jul 2018 — May 2019"
              grade="Percentage: 94.8%"
            />
            <EducationCard
              logo={sem}
              degree="CBSE School Education"
              college="SEM Sr. Secondary School"
              location="Rajasthan, India"
              duration="2004 — Mar 2016"
              grade="CGPA: 10.00"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
