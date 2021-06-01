import React from "react";
import styled from "styled-components";
// import projects from "../projects";
// Carousel from slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { motion } from 'framer-motion'
const Projects = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <motion.div animate={{ x: 0}} initial={{x: '-10vw'}} transition={{ type: 'spring', stiffness: 400 ,}}>
    <Carousel {...settings}>
      {projects.map((data) => (
        <Wrap key={data.id} >
          {data.imgTitle && <img src={data.imgTitle} className="logo"></img>}
          {data.title && <h3>{data.title}</h3>}
          <img className="bgImage" src={data.imgLink} alt="netflix" />
          <Btn>
            <div>
              <a href={data.siteLink} target="_blank" rel="noreferrer">
                visit site
              </a>
            </div>
            <div>
              <a href={data.codeLink} target="_blank" rel="noreferrer">
                view code
              </a>
            </div>
          </Btn>
        </Wrap>
      ))}
    </Carousel>
    </motion.div>
  );
};

const Btn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 1000000;
  div {
    width: 100%;
    padding: 15px 0;
    background-color: transparent;
    border: none;
    border-top: 2px solid white;
    cursor: pointer;
    font-size: 1.3rem;
    letter-spacing: 1.5px;
    text-align: center;

    a {
      text-decoration: none;
      /* color: #efefef; */
      color: white !important;
      position: relative;
      padding: 5px 0;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #efefef;
        height: 1px;
        width: 0;
        transition: 0.6s;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
      @media (max-width: 425px) {
        font-size: 0.8rem
      }
    }
  }
  div:nth-child(2) {
    border-left: 1px solid #efefef;
  }
`;

const Wrap = styled(motion.div)`
  border: 2px solid #efefef;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 600px;

  .bgImage {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    opacity: 0;
    z-index: -1;
  }

  .logo {
    object-fit: contain;
    width: 350px;
    height: 100%;
  }
  &:hover {
    .bgImage {
      opacity: 1;
      z-index: 10;
    }
    ${Btn} {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 767px) {
    height: 400px;
  }
  @media (max-width: 425px) {
    height: 300px;

    .logo {
      width: 200px;
    }
  }
  @media (max-width: 320px) {
    height: 250px;
    .logo {
      width: 150px;
    }
  }
`;

const Carousel = styled(Slider)``;

export default Projects;
