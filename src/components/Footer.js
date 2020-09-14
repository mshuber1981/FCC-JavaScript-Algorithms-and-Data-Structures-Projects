import React from "react";
// https://react-icons.netlify.com/#/
import { FaLinkedin, FaGithubSquare, FaFreeCodeCamp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-flex flex-column fixed-bottom align-items-center bg-primary">
      <div className="h1 d-inline my-2">
        <a
          href="https://www.linkedin.com/in/michael-huber-9b567a173"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.freecodecamp.org/mshuber1981"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5 text-white"
        >
          <FaFreeCodeCamp />
        </a>
        <a
          href="https://github.com/mshuber1981"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaGithubSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
