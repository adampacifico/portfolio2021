import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Project from "./Projects";
import { motion } from "framer-motion";
import Personal from "../projects";
import FccProject from "../fccData";

const Portfolio = () => {
  const [page, setPage] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const handlePage1 = () => {
    if (isActive) {
      return;
    } else {
      setIsActive(true);
    }
    setPage(!page);
  };

  const handlePage2 = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      return;
    }
    setPage(!page);
  };
  return (
    <Container>
      <Nav initial={{ y: -250 }} animate={{ y: 0 }}>
        <motion.div whileHover={{ scale: 1.2, translateX: "15px" }}>
          <Link to="/about">about</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, translateX: "-15px" }}>
          <Link to="/contact">contact</Link>
        </motion.div>
      </Nav>

      <Contents>
        <Projects>
          <Page>
            <span
              style={{ borderBottom: isActive ? "1px solid#efefef " : "none" }}
              onClick={handlePage1}
            >
              Personal Projects
            </span>{" "}
            \{" "}
            <span
              style={{ borderBottom: isActive ? "none" : "1px solid#efefef " }}
              onClick={handlePage2}
            >
              FreeCodeCamp Projects
            </span>
          </Page>
          {page ? (
            <Project projects={Personal} />
          ) : (
            <Project projects={FccProject} />
          )}
        </Projects>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  font-weight: 350;
  overflow-x: hidden;
`;

const Nav = styled(motion.div)`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #efefef;
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    a {
      font-size: 1.4rem;
    }
  }
`;

const Contents = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
`;

const Projects = styled.div`
  width: 100%;

  @media (max-width: 425px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`;
const Page = styled.div`
  padding: 8px 0;
  word-spacing: 2px;
  span {
    font-weight: 350;
    font-size: 1.4rem;
    padding: 3px 0;
    cursor: pointer;
    position: relative;
    line-height: 1.5;
    @media (max-width: 320px) {
      a {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 424px) {
    span {
      font-size: 0.8rem;
    }
  }
`;

export default Portfolio;
