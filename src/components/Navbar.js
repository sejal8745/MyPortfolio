import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";

import {
  AiOutlineBook,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineTool,
  AiOutlineFileText,
  AiFillStar,
  AiOutlineTrophy,
  AiOutlineTeam,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({ scrollToSection }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleNavClick = (sectionId) => {
    updateExpanded(false);

    // If we're on the resume page, navigate to home first then scroll
    if (location.pathname === "/resume") {
      navigate("/");
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <BootstrapNavbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <BootstrapNavbar.Brand className="d-flex"> */}
        {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        {/* </BootstrapNavbar.Brand> */}

        <BootstrapNavbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("home")}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("experience")}>
                <AiOutlineProfile style={{ marginBottom: "2px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("skills")}>
                <AiOutlineTool style={{ marginBottom: "2px" }} />
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("projects")}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("education")}>
                <AiOutlineBook style={{ marginBottom: "2px" }} />
                Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("achievements")}>
                <AiOutlineTrophy style={{ marginBottom: "2px" }} />
                Achievements
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick("positions")}>
                <AiOutlineTeam style={{ marginBottom: "2px" }} />
                Positions
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFileText style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/sejal8745"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
