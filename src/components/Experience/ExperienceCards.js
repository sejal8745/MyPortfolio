import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function ExperienceCards(props) {
  return (
    <div style={{ position: "relative", marginBottom: "40px" }}>
      {/* Timeline Line */}
      <div
        style={{
          position: "absolute",
          left: "30px",
          top: "10px",
          bottom: "0px",
          width: "2px",
          background: "linear-gradient(180deg, #c770f0 0%, #623686 100%)",
          zIndex: 1,
        }}
      />

      {/* Timeline Dot */}
      <div
        style={{
          position: "absolute",
          left: "22px",
          top: "22px",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "#c770f0",
          border: "3px solid #0d1117",
          zIndex: 2,
        }}
      />

      <Row>
        <Col xs={1} md={1}>
          {/* Empty space for timeline */}
        </Col>
        <Col xs={11} md={10}>
          <Card
            className="project-card-view"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Card.Body style={{ padding: "20px", textAlign: "left" }}>
              <Row className="align-items-start">
                <Col
                  xs={12}
                  md={2}
                  lg={1}
                  className="d-flex justify-content-xs-start mb-3 "
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: `url(${props.logo}) center/cover`,
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      flexShrink: 0,
                    }}
                  />
                </Col>

                <Col xs={12} md={10} lg={11}>
                  <Card.Title
                    style={{
                      color: "#fff",
                      fontSize: "1.3rem",
                      fontWeight: "600",
                    }}
                  >
                    {props.position}
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      color: "#c770f0",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {props.company}
                  </Card.Subtitle>
                  <Card.Subtitle
                    style={{
                      color: "#a9a9a9",
                      fontSize: "0.9rem",
                      marginBottom: "10px",
                      marginTop: "5px",
                    }}
                  >
                    {props.duration}
                  </Card.Subtitle>
                  <Card.Text
                    style={{
                      textAlign: "left",
                      color: "#fff",
                      lineHeight: "1.5",
                      fontSize: "0.95rem",
                    }}
                  >
                    {props.description}
                  </Card.Text>
                  <div style={{ marginTop: "12px" }}>
                    <strong style={{ color: "#fff", fontSize: "0.9rem" }}>
                      Skills:{" "}
                    </strong>
                    <span style={{ color: "#a9a9a9", fontSize: "0.9rem" }}>
                      {props.skills.map((skill, index) => (
                        <span key={index}>
                          • {skill}
                          {index < props.skills.length - 1 ? " " : ""}
                        </span>
                      ))}
                    </span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ExperienceCards;
