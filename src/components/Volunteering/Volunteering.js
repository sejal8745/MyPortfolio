import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const volunteeringRoles = [
  {
    title: "Graphic Designing Team Head",
    org: "IEEE Student Branch, IIIT Gwalior",
    duration: "Dec'21 – Jan'22",
    icon: "🎨",
  },
  {
    title: "Publicity and Promotions Team Member",
    org: "IBSSC'21",
    duration: "Sep'21 – Nov'21",
    icon: "📢",
  },
  {
    title: "Le Artie Fiesta Member",
    org: "Aurora'20, IIITM Gwalior",
    duration: "Oct'19 – Feb'20",
    icon: "🎭",
  },
  {
    title: "Problem Tester",
    org: "Junior Programming Contest at AASF, Gwalior",
    duration: "2021",
    icon: "🧠",
  },
];

const Volunteering = () => {
  return (
    <Container fluid className="position-section">
      <Container>
        {" "}
        <Row className="justify-content-center pb-5">
          <Col xs={12} className="text-center">
            <h1 className="project-heading">
              Volunteering <strong className="purple"> Positions</strong>
            </h1>
            <p
              style={{ color: "white", fontSize: "1.2em", paddingTop: "10px" }}
            >
              Leadership roles and volunteer positions I have held, showcasing
              my commitment to community and teamwork.
            </p>
          </Col>
        </Row>
        <Row xs={1} md={3} lg={4} className="g-4">
          {volunteeringRoles.map((role, idx) => (
            <Col key={idx}>
              <Card
                className="h-100"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
              >
                <Card.Body className="p-4 text-center">
                  <div
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      fontSize: "1.5rem",
                    }}
                  >
                    {role.icon}
                  </div>

                  <Card.Title
                    className="mb-2"
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      lineHeight: "1.3",
                    }}
                  >
                    {role.title}
                  </Card.Title>

                  <Card.Text
                    className="mb-2"
                    style={{
                      color: "#b0b0b0",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {role.org}
                  </Card.Text>

                  {role.duration && (
                    <Card.Text
                      style={{
                        color: "#888",
                        fontSize: "0.85rem",
                        marginBottom: "0",
                      }}
                    >
                      {role.duration}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Volunteering;
