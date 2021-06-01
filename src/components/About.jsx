import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const About = () => {
  const [isClick, setIsClick] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [verify, setVerify] = useState("");

  const handleClick = (num) => {
    if (num === 1) {
      setImgSrc("/images/frameworks.png");
      setIsClick(true);
      setVerify(
        "https://www.freecodecamp.org/certification/adampacifico/front-end-libraries"
      );
    } else {
      setImgSrc("/images/rwb.png");
      setIsClick(true);
      setVerify(
        "https://www.freecodecamp.org/certification/adampacifico/responsive-web-design"
      );
    }
  };
  return (
    <Container>
      <Nav className="nav" initial={{ y: -250 }} animate={{ y: 0 }}>
        <motion.div whileHover={{ scale: 1.2, translateX: "15px" }}>
          <Link to="/">home</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, translateX: "-15px" }}>
          <Link to="/projects">projects</Link>
        </motion.div>
      </Nav>
      <Contents>
        <AboutME>
          <Typewriter
            options={{
              delay: 100,
              autoStart: false,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("about me").start();
            }}
          ></Typewriter>
          <motion.p
            transition={{ duration: 0.25 }}
            animate={{ scale: 1 }}
            initial={{ scale: 0.2 }}
          >
            Hi! My name is Adam Jaspher Pacifico, 23 years of age, living in the
            province of Sultan Kudarat, Philippines. I obtained my degree in BS
            Computer Engineering at Notre Dame of Marbel University.
            <br />
            <br />I enjoy taking complex problems and turning them into simple
            and beautiful interface designs. I also love the logic and structure
            of coding and always strive to write clean and effecient code.
            <br />
            <br />
          </motion.p>
        </AboutME>
        <Image
          transition={{ duration: 0.25 }}
          animate={{ scale: 1 }}
          initial={{ scale: 0.2 }}
        >
          <motion.img className="me" src="/images/adam.jpg" alt="" />
          <Details>
            <p> - Skillset -</p>
            <p>
              HTML - JAVASCRIPT - CSS - REACT - BOOTSTRAP - FIREBASE - GITHUB -
              WORDPRESS{" "}
            </p>
            <Certs>
              <img
                onClick={() => handleClick(1)}
                src="/images/frameworks.png"
                alt=""
              />
              <img
                onClick={() => handleClick(2)}
                src="/images/rwb.png"
                alt=""
              />
            </Certs>
          </Details>
        </Image>
      </Contents>
      {isClick ? (
        <Modal onClick={() => setIsClick(false)}>
          <div className="img_container">
            <img src={imgSrc} alt="" />
            <i className="fa fa-times" onClick={() => setIsClick(false)}></i>
          </div>
          <a href={verify} target="_blank" rel="noreferrer">
            verify
          </a>
        </Modal>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  font-weight: 350;
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
    position: unset;
  }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Image = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto 0;
  position: relative;
  height: fit-content;

  .me {
    height: 300px;
    border-radius: 50%;
    width: 300px;

    @media (max-width: 768) {
      height: 250px;
      width: 250x;
    }
  }
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-left: 2px solid #efefef;
  }

  @media (max-width: 425px) {
    &:after {
      border: none;
    }

    margin: 30px 0;
  }
  @media (max-width: 320px) {
    .me {
      height: 150px;
      width: 150px;
    }
  }
`;
const Details = styled.div`
  width: 100%;
  text-align: center;
  p {
    font-size: 1.2rem;
    padding: 0 8px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;
const AboutME = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  position: relative;
  padding: 0 8px;
  div {
    font-size: 2.5rem;
  }
  p {
    line-height: 1.5;
    font-size: 1.3rem;
    font-weight: 350;
    text-align: justify;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  /* laptop */
  @media (max-width: 1024px) {
    padding: 0 12px;
  }
  /* tablet */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Certs = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    object-fit: contain;
    height: 200px;
    /* width: fit; */
    z-index: 10;
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 0.1);
    transition: 0.4s;

    &:hover {
      border-color: #efefef;
    }
    @media (max-width: 1024px) {
      height: 150px;
    }
    @media (max-width: 768px) {
      height: 125px;
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.6);
  img {
    object-fit: contain;
    width: 100%;
    height: fit-content;
  }
  .img_container {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    color: #efefef;
    font-weight: 400;
    position: relative;
    display: flex;
    flex-direction: column;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      border: none;
      width: 0;
      height: 2.5px;
      background-color: #efefef;
      transition: 0.4s;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  i {
    font-size: 1.4rem;
    transform: translate(2px, -10px);
    cursor: pointer;
    color: red;
  }
`;
export default About;
