import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-img.png";
import Particle from "../Particle";
import Type from "./Type";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <div style={{ padding: 50, paddingTop: 0, textAlign: "left" }}>
                <Type />
              </div>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SEJAL GOYAL</strong>
              </h1>
              <div style={{ padding: 50, paddingTop: 0, textAlign: "left" }}>
                I'm a Full Stack Software Developer passionate about crafting
                secure, scalable SaaS solutions using the{" "}
                <strong style={{ color: "#cd5ff8" }}>MERN stack</strong> and{" "}
                <strong style={{ color: "#cd5ff8" }}>Next.js</strong>. A proud
                postgraduate from{" "}
                <strong style={{ color: "#cd5ff8" }}>IIITM Gwalior</strong>,
                I've strengthened my core problem-solving abilities by solving{" "}
                <strong style={{ color: "#cd5ff8" }}>
                  670+ LeetCode problems
                </strong>
                , developing a deep understanding of Data Structures and
                Algorithms. I thrive in fast-paced, innovation-first
                environments and bring a strong sense of ownership, creativity,
                and adaptability — traits sharpened through real-world startup
                experience.
                <br />
                <br />I was also selected as a{" "}
                <strong style={{ color: "#cd5ff8" }}>
                  Virtual Grace Hopper Celebration’21 Student Scholar
                </strong>{" "}
                from over 29,000 applicants — a milestone that reflects my
                commitment to growth and community. Outside of code, you’ll find
                me exploring graphic design, creating UI concepts, or enjoying
                downtime with family and friends.
                <p style={{ marginTop: "1.5rem", fontStyle: "italic" }}>
                  Ready to dive deeper? Let’s walk through the journey that
                  shaped me into the developer I am today.
                </p>
              </div>
            </Col>

            <Col
              md={5}
              className="d-none d-md-block"
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
