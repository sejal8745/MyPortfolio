import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techCategories = [
    {
      title: "Frameworks and Languages",
      skills: [
        { icon: <CgCPlusPlus />, name: "C/C++" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiNodejs />, name: "NodeJS" },
        { icon: <SiExpress />, name: "ExpressJS" },
        { icon: <DiMongodb />, name: "MongoDB" },
        { icon: <DiReact />, name: "ReactJS" },
        { icon: <SiNextdotjs />, name: "NextJS" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiMongodb />, name: "Mongoose" },
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <SiCss3 />, name: "CSS" },
      ],
    },
    {
      title: "Domain Knowledge",
      skills: [
        { icon: <DiGit />, name: "Data Structures & Algorithms" },
        { icon: <CgCPlusPlus />, name: "Operating System" },
        { icon: <DiJava />, name: "OOPS" },
        { icon: <SiPostgresql />, name: "DBMS" },
        { icon: <DiReact />, name: "UI/UX Development" },
      ],
    },
  ];

  return (
    <div className="pb-5">
      {techCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-1">
          <h3 className="text-center mb-4 text-white fw-bold">
            {category.title}
          </h3>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {category.skills.map((skill, skillIndex) => (
              <Col xs={4} sm={1} className="tech-icons" key={skillIndex}>
                <div className="tech-item text-center">
                  <div className="tech-icon-wrapper mb-1">{skill.icon}</div>
                  <p className="tech-name text-white small">{skill.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      <style jsx>{`
        .tech-icons {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        }

        .tech-item {
          transition: transform 0.3s ease;
        }

        .tech-item:hover {
          transform: translateY(-5px);
        }

        .tech-icon-wrapper {
          font-size: 3rem;
          color: #c770f0;
          transition: color 0.3s ease;
        }

        .tech-item:hover .tech-icon-wrapper {
          color: #cd5ff8;
        }

        .tech-name {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.9;
        }

        h3 {
          color: #c770f0 !important;
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .tech-icon-wrapper {
            font-size: 2rem;
          }

          .tech-name {
            font-size: 0.8rem;
          }

          h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Techstack;
