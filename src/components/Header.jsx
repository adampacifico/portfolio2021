import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <Container>
      <NavList initial={{ y: -250 }} animate={{ y: 0 }}>
        <Nav whileHover={{ scale: 1.2, translateY: '10px'}}>
          <Link to="/about">about</Link>
        </Nav>
        <Nav whileHover={{ scale: 1.2, translateY: '20px'}}>
          <Link to="/projects">projects</Link>
        </Nav>
        <Nav whileHover={{ scale: 1.2, translateY: '20px'}}>
          <Link to="/contact">contact</Link>
        </Nav>
      </NavList>
      <Title>
        <ImageGif>
          <motion.img
            src="/images/hacker2.gif"
            alt=""
            animate={{ height: "300px" }}
          />
        </ImageGif>
        <Myname>
          <Typewriter
            options={{
              loop: true,
              deleteSpeed: 1,
              delay: 50,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World !")
                .pauseFor(1000)
                .deleteAll()
                .typeString("My name is Adam.")
                .pauseFor(4000)
                .deleteAll()
                .start();
            }}
          ></Typewriter>
          <motion.p initial={{ y: -250 }} animate={{ y: 0 }}>
            Web Developer
          </motion.p>
        </Myname>
      </Title>

      <Rights>
        2021 All Rights Reserved
      </Rights>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const NavList = styled(motion.ul)`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  right: 0;
  left: 0;
  width: 100%;
  @media (max-width: 426px) {
    padding-left: 5px;
  }
`;
const Title = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto 0;
  height: 100%;

  @media (max-width: 426px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const Nav = styled(motion.li)`
  letter-spacing: 2px;
  font-size: 2rem;
  cursor: pointer;
  width: fit-content;
  font-weight: 300;
  margin: 0 12px;

  a {
    text-decoration: none;
    color: #efefef;
  }
  /* &:hover {
    transform: scale(1.08) translateY(10px);
  } */

  @media (max-width: 426px) {
    font-size: 1.2rem;
  }
  @media (max-width: 319px) {
    font-size: 1rem;
  }
`;

const ImageGif = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 0 8px;
  height: fit-content;
  margin: auto 0;
  img {
    margin: 0 auto;
    object-fit: contain;
    height: 250px;
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-right: 2px solid #efefef;
  }
  @media (max-width: 425px) {
    &::after {
      border: none;
    }
    margin: 0;
  }
`;

const Myname = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;

  div {
    font-size: 3rem;
    letter-spacing: 5px;
    margin: 10px;
    margin: 0;

    @media (max-width: 769px) {
      font-size: 1.7rem;
    }
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    @media (max-width: 280px) {
      font-size: 1.1rem;
    }
  }
  p {
    margin: 0;
    text-align: left;
    font-size: 1.7rem;
    letter-spacing: 3px;

    @media (max-width: 769px) {
      font-size: 1.2rem;
    }
    @media (max-width: 320px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 426px) {
    padding-left: 5px;
  }
`;

const Rights = styled.p`
  color: #efefef;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 0.8rem;
  text-decoration: none;
  @media (max-width: 426px) {
    font-size: 8px;
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 0;
  i {
    color: #efefef;
    font-size: 4rem;
    margin-right: 8px;
    cursor: pointer;
    @media (max-width: 426px) {
      font-size: 2.5rem;
    }
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 426px) {
    padding-left: 5px;
  }

  .fa-facebook-square {
    &:hover {
      color: #4267b2;
    }
  }
  .fa-github-square {
    &:hover {
      color: black;
    }
  }
  .fa-twitter-square {
    &:hover {
      color: #00acee;
    }
  }
`;
export default Header;
