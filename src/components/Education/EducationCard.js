import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function EducationCard(props) {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "25px",
        // marginBottom: "50px",
      }}
    >
      {/* Vertical timeline bar */}
      <div
        style={{
          position: "absolute",
          left: "12px",
          top: "0",
          bottom: "0",
          width: "4px",
          background: "linear-gradient(to bottom, #c770f0, #623686)",
          borderRadius: "2px",
        }}
      ></div>

      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: "5px",
          top: "10px",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "#c770f0",
          border: "4px solid #0d1117",
          zIndex: 2,
        }}
      ></div>

      <Card
        className="education-card"
        style={{
          background: "none",
          padding: "20px",
          color: "#fff",
          boxShadow: "0 4px 30px rgba(51, 51, 51, 0.2)",
        }}
      >
        <Row>
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <img
              src={props.logo}
              alt="logo"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                borderRadius: "12px",
                backgroundColor: "#fff",
                padding: "8px",
                border: "1px solid #ddd",
              }}
            />
          </Col>
          <Col xs={12} md={9} className="text-center text-md-start">
            <h5
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {props.degree}
            </h5>
            <h6 style={{ color: "#c770f0", fontWeight: "500" }}>
              {props.college}
            </h6>
            <p
              style={{ color: "#aaa", marginBottom: "4px", fontSize: "0.9rem" }}
            >
              {props.location}
            </p>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              {props.duration}
            </p>
            <p
              style={{
                marginTop: "10px",
                fontSize: "0.95rem",
                backgroundColor: "#2c2c2c",
                padding: "8px",
                borderRadius: "8px",
                display: "inline-block",
                color: "#c770f0",
              }}
            >
              {props.grade}
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default EducationCard;
