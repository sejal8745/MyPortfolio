import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineBehance,
  AiOutlineCopy,
  AiOutlineCheck,
} from "react-icons/ai";
import { FaBolt, FaChessKnight, FaCode, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = "sejal.goyal.dev@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <AiFillGithub />,
      url: "https://github.com/sejal8745",
      color: "#333",
    },
    {
      name: "Behance",
      icon: <AiOutlineBehance />,
      url: "https://www.behance.net/sejalgoyal/",
      color: "#1769ff",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sejal-goyal-437015194/",
      color: "#0077b5",
    },
    {
      name: "Leetcode",
      icon: <FaCode />,
      url: "https://leetcode.com/sejal8745/",
      color: "#fca121", // Leetcode orange
    },
    {
      name: "Codechef",
      icon: <FaChessKnight />,
      url: "https://www.codechef.com/users/saira23",
      color: "#5B4638", // CodeChef brown
    },
    {
      name: "Codeforces",
      icon: <FaBolt />,
      url: "https://codeforces.com/profile/sejal23",
      color: "#1F8ACB", // Codeforces blue
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#1a1a2e",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        marginTop: "auto",
      }}
    >
      <Container fluid className="py-4">
        {/* Main Footer Content */}
        <Row className="align-items-center">
          {/* Copyright Section */}
          <Col
            lg={4}
            md={12}
            className="text-center text-lg-start mb-3 mb-lg-0"
          >
            <div style={{ color: "#b0b0b0" }}>
              <p
                className="mb-1"
                style={{ fontSize: "0.9rem", fontWeight: "500" }}
              >
                &copy; {year}{" "}
                <span style={{ color: "#fff", fontWeight: "600" }}>
                  Sejal Goyal
                </span>
              </p>
            </div>
          </Col>

          {/* Email Section */}
          <Col lg={4} md={12} className="text-center mb-3 mb-lg-0">
            <div
              onClick={handleCopy}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "12px 20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <AiOutlineMail style={{ fontSize: "1.2rem", color: "#fff" }} />
              <span
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                }}
              >
                {copied ? "Copied!" : email}
              </span>
              {copied ? (
                <AiOutlineCheck
                  style={{ fontSize: "1rem", color: "#4ade80" }}
                />
              ) : (
                <AiOutlineCopy style={{ fontSize: "1rem", color: "#888" }} />
              )}
            </div>
          </Col>

          {/* Social Links Section */}
          <Col lg={4} md={12} className="text-center text-lg-end">
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#b0b0b0",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#b0b0b0";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bottom Divider */}
        <hr
          style={{
            borderColor: "rgba(255, 255, 255, 0.1)",
            margin: "20px 0 10px 0",
          }}
        />

        {/* Bottom Section */}
        <Row>
          <Col className="text-center">
            <p
              style={{
                color: "#666",
                fontSize: "0.8rem",
                margin: "0",
                fontWeight: "400",
              }}
            >
              Designed & Built with passion • Let's create something amazing
              together!
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
