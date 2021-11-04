import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_asprdho",
        "template_dxro7g7",
        e.target,
        "user_5nGXzmFcNT2D1HhfEKSGU"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container>
      <Nav initial={{ y: -250 }} animate={{ y: 0 }}>
        <motion.div whileHover={{ scale: 1.2, translateX: "15px" }}>
          <Link to="/projects">projects</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, translateX: "-15px" }}>
          <Link to="/">home</Link>
        </motion.div>
      </Nav>
      <Contents>
        <Form
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ type: "tween" }}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="your name"
            required
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="from_email"
            placeholder="your email"
          />
          <label>Subject</label>
          <input
            required
            type="text"
            name="from_subject"
            placeholder="subject"
          />
          <label>Message</label>
          <textarea
            required
            name="message"
            placeholder="your message"
            rows="5"
          />
          <input type="submit" value="Send" />
        </Form>

        <ContactDetails
          initial={{ x: "-500px" }}
          animate={{ x: 0 }}
          transition={{ type: "tween" }}
        >
          <div className="contact">
            <h4>contact me</h4>
            <img src="/images/contactME.gif" alt="" />
          </div>

          <p>name: Adam Jaspher L. Pacifico</p>
          <p>phone: 09154818159</p>
          <p>email: adamjaspher04@gmail.com</p>
          <SocialIcons>
            <a
              href="https://www.facebook.com/adamjaspherpacifico/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://github.com/adampacifico"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
            <a
              href="https://twitter.com/PacificoAdam"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </SocialIcons>
          <a href="https://drive.google.com/file/d/1QqvPr5Akik0_VcwuZ2kSm0Yw-7XLvEfe/view?usp=sharing" 
            target="_blank" className="download">
            <i className="fa fa-download"></i>
            my resume
          </a>
        </ContactDetails>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  font-weight: 300;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  width: 100%;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
  }
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
const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  position: relative;

  input,
  textarea {
    color: #efefef;
    width: 100%;
    margin-bottom: 20px;
    padding: 5px 0;
    font-size: 1.7rem;
    z-index: 1;
    background-color: transparent;
    letter-spacing: 1.5px;
    border-style: none;
    border-bottom: 2px solid rgba(239, 239, 239, 0);
    transition: 0.4s;

    &:focus {
      border-bottom: 2px solid rgba(239, 239, 239, 1);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0) inset !important;
      outline: none !important;
    }
  }
  textarea {
    height: auto;
    overflow-y: unset;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  label {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  input[type="submit"] {
    cursor: pointer;
    z-index: 1;
    border: 1px solid #efefef;
    transition: 0.4s;
    &:hover {
      background-color: #efefef;
      color: black;
    }
  }
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-right: 2px solid #efefef;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 767px) {
    &:after {
      display: none;
    }
    margin-top: 30px;
    padding: 0 10px;
    width: 500px;
    object-fit: contain;
  }
  @media (max-width: 522px) {
    width: 100%;
  }
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  padding: 0 10px;
  margin: 0 auto;
  position: relative;
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    img {
      object-fit: contain;
      height: 1.5rem;
    }
    h4 {
      font-size: 2.5rem;
      font-weight: 375;
      margin-bottom: 25px;
    }
  }
  p {
    margin: 0 0 15px;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    word-spacing: 0.5;
  }

  .download {
    padding: 8px 0;
    width: 100%;
    text-decoration: none;
    color: #efefef;
    text-align: center;
    border: 1px solid #efefef;
    margin: 12px 0;
    letter-spacing: 5px;
    font-size: 1.2rem;
    i {
      margin-right: 8px;
    }
    &:hover {
      i {
        color: yellowgreen;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 40px;

    border-bottom: 2px solid #efefef;
  }
  @media (max-width: 522px) {
    width: 100%;
    p {
      font-size: 0.8rem;
    }
    .contact {
      h4 {
        font-size: 2rem;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
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
      color: pink;
    }
  }
  .fa-twitter-square {
    &:hover {
      color: #00acee;
    }
  }
`;
export default Contact;
