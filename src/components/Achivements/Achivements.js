import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaTrophy,
  FaCode,
  FaAward,
  FaMedal,
  FaCog,
  FaUsers,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      text: "Selected as a Virtual Grace Hopper Celebration’21 Student Scholar out of 29K+ registrants",
      icon: <FaAward />,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      text: "Solved 670+ DSA problems on Leetcode",
      icon: <FaCode />,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      text: "Achieved Rank 138 out of 1200+ participants in ICPC AlgoQueen 2024 - Prelims",
      icon: <FaMedal />,
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      text: "Achieved All India Rank 1148 and Institute Rank 4th in CodeKaze Coding contest held by Coding Ninjas in 2022.",
      icon: <FaCog />,
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
    //   color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    {
      text: "HackNITP3.0, secured Rank 13th out of 100+ participating teams",
      icon: <FaUsers />,
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    },
    {
      text: "Secured Position 2nd in a graphic designing competition organized by IEEE student branch",
      icon: <FaTrophy />,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
  ];

  return (
    <Container fluid className="achievements-section">
      <Container>
        <Row className="justify-content-center pb-5">
          <Col xs={12} className="text-center">
            <h1 className="project-heading">
              My <strong className="purple">Achievements</strong>
            </h1>
            <p
              style={{ color: "white", fontSize: "1.2em", paddingTop: "10px" }}
            >
              Milestones that mark my journey and growth in the tech world.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5 g-4">
          {achievements.map((achievement, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card className="achievement-card h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="achievement-icon-container mb-3">
                    <div
                      className="achievement-icon"
                      style={{ background: achievement.color }}
                    >
                      {achievement.icon}
                    </div>
                  </div>
                  <Card.Text className="achievement-text flex-grow-1">
                    {achievement.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
