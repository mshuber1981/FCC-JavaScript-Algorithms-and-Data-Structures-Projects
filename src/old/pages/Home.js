import React from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaFreeCodeCamp } from "react-icons/fa";

const Home = () => {
  return (
    <section className="container">
      <div id="home" className="d-flex flex-column min-vh-100 align-items-center justify-content-center bg-light">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead px-2 text-center">
          Thanks for checking out my spin on the{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freecodecamp.org
          </a>{" "}
          JavaScript Algorithms and Data Structures Projects.
        </p>
        <a
          href="https://www.freecodecamp.org/mshuber1981"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg">
            <FaFreeCodeCamp className="mr-2" /> FCC Profile
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Home;
