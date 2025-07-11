import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiGithub,
  SiGit,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiMacos />, name: "macOS" },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons">
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
